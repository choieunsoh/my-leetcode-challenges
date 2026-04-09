// 3655. XOR After Range Multiplication Queries II
// https://leetcode.com/problems/xor-after-range-multiplication-queries-ii/description/
// T.C.: O((n+q)*sqrt(n)+q log M)
// S.C.: O(sqrt(n)+q)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const MOD = 1_000_000_007n;

  const n = nums.length;
  const T = Math.floor(Math.sqrt(n));
  const groups = Array.from({ length: T }, () => []);

  for (const [l, r, k, v] of queries) {
    if (k < T) {
      groups[k].push([l, r, BigInt(v)]);
    } else {
      for (let i = l; i <= r; i += k) {
        nums[i] = Number((BigInt(nums[i]) * BigInt(v)) % MOD);
      }
    }
  }

  const dif = new BigInt64Array(n + T);
  for (let k = 1; k < T; k++) {
    if (groups[k].length === 0) {
      continue;
    }
    dif.fill(1n);
    for (let [l, r, v] of groups[k]) {
      dif[l] = (dif[l] * BigInt(v)) % MOD;
      const R = Math.floor((r - l) / k + 1) * k + l;
      dif[R] = (dif[R] * pow(BigInt(v), MOD - 2n)) % MOD;
    }

    for (let i = k; i < n; i++) {
      dif[i] = (dif[i] * dif[i - k]) % MOD;
    }
    for (let i = 0; i < n; i++) {
      nums[i] = Number((BigInt(nums[i]) * dif[i]) % MOD);
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = result ^ nums[i];
  }
  return result;

  function pow(x, y) {
    let result = 1n;
    for (; y > 0n; y >>= 1n) {
      if (y & 1n) {
        result = (result * x) % MOD;
      }
      x = (x * x) % MOD;
    }
    return result;
  }
};

var nums = [1, 1, 1],
  queries = [[0, 2, 1, 4]];
var expected = 4;
var result = xorAfterQueries(nums, queries);
console.log(result, result === expected);

var nums = [2, 3, 1, 5, 4],
  queries = [
    [1, 4, 2, 3],
    [0, 2, 1, 2],
  ];
var expected = 31;
var result = xorAfterQueries(nums, queries);
console.log(result, result === expected);
