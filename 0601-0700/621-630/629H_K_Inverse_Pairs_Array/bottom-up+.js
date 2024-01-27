// 629. K Inverse Pairs Array
// https://leetcode.com/problems/k-inverse-pairs-array/description/
// T.C.: O(n*k)
// S.C.: O(k)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const MOD = 1e9 + 7;
  let dp = new Array(k + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const curr = new Array(k + 1).fill(0);
    curr[0] = 1;
    for (let j = 1; j <= k; j++) {
      const val = (dp[j] + MOD - (j - i >= 0 ? dp[j - i] : 0)) % MOD;
      curr[j] = (curr[j - 1] + val) % MOD;
    }
    dp = curr;
  }
  return (dp[k] + MOD - (k > 0 ? dp[k - 1] : 0)) % MOD;
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
