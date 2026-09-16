// 1621. Number of Sets of K Non-Overlapping Line Segments
// https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/description/
// T.C.: O(n * k)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  const MOD = 1000000007;
  const dp = new Array(n).fill(1);
  const prefixSums = new Array(n + 1).fill(0);
  for (let j = 0; j < n; j++) {
    prefixSums[j + 1] = (prefixSums[j] + dp[j]) % MOD;
  }
  for (let i = 1; i <= k; i++) {
    dp[0] = 0;
    for (let j = 1; j < n; j++) {
      dp[j] = (dp[j - 1] + prefixSums[j]) % MOD;
    }
    for (let j = 0; j < n; j++) {
      prefixSums[j + 1] = (prefixSums[j] + dp[j]) % MOD;
    }
  }
  return dp[n - 1];
};

var n = 4,
  k = 2;
var expected = 5;
var result = numberOfSets(n, k);
console.log(result, result === expected);

var n = 3,
  k = 1;
var expected = 3;
var result = numberOfSets(n, k);
console.log(result, result === expected);

var n = 30,
  k = 7;
var expected = 796297179;
var result = numberOfSets(n, k);
console.log(result, result === expected);
