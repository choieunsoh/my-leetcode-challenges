// 629. K Inverse Pairs Array
// https://leetcode.com/problems/k-inverse-pairs-array/description/
// T.C.: O(n*k)
// S.C.: O(n*k)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: 1001 }, () => new Array(1001));
  return (dfs(n, k) + MOD - (k > 0 ? dfs(n, k - 1) : 0)) % MOD;

  function dfs(n, k) {
    if (n === 0) return 0;
    if (k === 0) return 1;
    if (memo[n][k] !== undefined) return memo[n][k];

    const val = (dfs(n - 1, k) + MOD - (k - n >= 0 ? dfs(n - 1, k - n) : 0)) % MOD;
    memo[n][k] = (dfs(n, k - 1) + val) % MOD;
    return memo[n][k];
  }
};

var n = 3,
  k = 0;
var expected = 1;
var result = kInversePairs(n, k);
console.log(result, result === expected);

var n = 3,
  k = 1;
var expected = 2;
var result = kInversePairs(n, k);
console.log(result, result === expected);
