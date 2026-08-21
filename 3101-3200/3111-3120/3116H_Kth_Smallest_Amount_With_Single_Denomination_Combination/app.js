// 3116. Kth Smallest Amount With Single Denomination Combination
// https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/description/
// T.C.: O(2^n * n * log(max(coins))
// S.C.: O(2^n)
/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  coins.sort((a, b) => a - b);
  const n = coins.length;
  const m = 1 << n;

  let l = BigInt(k);
  let r = BigInt(coins[0]) * BigInt(k) + 1n;

  const bitCount = new Array(m).fill(0);
  const lcm = new Array(m).fill(0n);

  for (let mask = 1; mask < m; mask++) {
    let curLcm = 1n;
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) {
        const coin = BigInt(coins[i]);
        const g = gcd(curLcm, coin);
        const tmp = curLcm / g;

        if (tmp <= r / coin) {
          curLcm = tmp * coin;
        } else {
          curLcm = r + 1n;
          break;
        }
        bitCount[mask]++;
      }
    }
    lcm[mask] = curLcm;
  }

  while (l < r) {
    const mid = (l + r) / 2n;
    if (count(mid) >= BigInt(k)) {
      r = mid;
    } else {
      l = mid + 1n;
    }
  }
  return Number(l);

  function gcd(a, b) {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function count(x) {
    let result = 0n;
    for (let mask = 1; mask < m; mask++) {
      if (lcm[mask] > x) continue;

      if (bitCount[mask] & 1) {
        result += x / lcm[mask];
      } else {
        result -= x / lcm[mask];
      }
    }
    return result;
  }
};

var coins = [3, 6, 9],
  k = 3;
var expected = 9;
var result = findKthSmallest(coins, k);
console.log(result, result === expected);

var coins = [5, 2],
  k = 7;
var expected = 12;
var result = findKthSmallest(coins, k);
console.log(result, result === expected);
