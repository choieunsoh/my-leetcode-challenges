// 3116. Kth Smallest Amount With Single Denomination Combination
// https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/description/
// T.C.: O(n^2 + 2^n * log(max(coins))
// S.C.: O(2^n)
/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  coins.sort((a, b) => a - b);
  const newCoins = [];
  for (const x of coins) {
    let flag = true;
    for (const y of newCoins) {
      if (x % y === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      newCoins.push(x);
    }
  }
  coins = newCoins;

  const n = coins.length;
  const m = 1 << n;
  const lcm = new Array(m).fill(0n);
  let l = BigInt(k);
  let r = BigInt(coins[0]) * BigInt(k) + 1n;

  lcm[0] = 1n;
  for (let mask = 1; mask < m; mask++) {
    const preMask = mask & (mask - 1);
    const i = trailingZeros(mask);

    const coin = BigInt(coins[i]);
    const tmp = lcm[preMask] / gcd(lcm[preMask], coin);
    if (tmp <= r / coin) {
      lcm[mask] = tmp * coin;
    } else {
      lcm[mask] = r + 1n;
    }
  }

  const count = (x) => {
    let res = 0n;
    for (let mask = 1; mask < m; mask++) {
      if (lcm[mask] > x) continue;

      if (popcount(mask) & 1) {
        res += x / lcm[mask];
      } else {
        res -= x / lcm[mask];
      }
    }
    return res;
  };

  while (l < r) {
    const mid = (l + r) / 2n;
    if (count(mid) >= k) {
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

  function trailingZeros(x) {
    let count = 0;
    while ((x & 1) === 0) {
      count++;
      x >>= 1;
    }
    return count;
  }

  function popcount(x) {
    let count = 0;
    while (x) {
      count += x & 1;
      x >>= 1;
    }
    return count;
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
