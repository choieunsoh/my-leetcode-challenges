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
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j === 0) {
        dp[i][j] = 1;
      } else {
        const val = (dp[i - 1][j] + MOD - (j - i >= 0 ? dp[i - 1][j - i] : 0)) % MOD;
        dp[i][j] = (dp[i][j - 1] + val) % MOD;
      }
    }
  }
  return (dp[n][k] + MOD - (k > 0 ? dp[n][k - 1] : 0)) % MOD;
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
