// 2327. Number of People Aware of a Secret
// https://leetcode.com/problems/number-of-people-aware-of-a-secret/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  for (let limit = 0; limit <= n; limit++) {
    dp[limit] = forget >= limit ? 1 : 0;
  }
  for (let limit = 0; limit <= n; limit++) {
    for (let d = delay; d < Math.min(forget, limit); d++) {
      dp[limit] = (dp[limit] + dp[limit - d]) % MOD;
    }
  }
  return dp[n];
};

var n = 6,
  delay = 2,
  forget = 4;
var expected = 5;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);

var n = 4,
  delay = 1,
  forget = 3;
var expected = 6;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);

var n = 684,
  delay = 18,
  forget = 496;
var expected = 653668527;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);
