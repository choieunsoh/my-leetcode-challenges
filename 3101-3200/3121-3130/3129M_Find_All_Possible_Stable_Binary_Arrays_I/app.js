// 3129. Find All Possible Stable Binary Arrays I
// https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/description/
// T.C.: O(zero * one)
// S.C.: O(zero * one)
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: zero + 1 }, () => Array.from({ length: one + 1 }, () => [0, 0]));

  for (let i = 0; i <= Math.min(zero, limit); i++) {
    dp[i][0][0] = 1;
  }
  for (let j = 0; j <= Math.min(one, limit); j++) {
    dp[0][j][1] = 1;
  }

  for (let i = 1; i <= zero; i++) {
    for (let j = 1; j <= one; j++) {
      if (i > limit) {
        dp[i][j][0] = dp[i - 1][j][0] + dp[i - 1][j][1] - dp[i - limit - 1][j][1];
      } else {
        dp[i][j][0] = dp[i - 1][j][0] + dp[i - 1][j][1];
      }

      dp[i][j][0] = ((dp[i][j][0] % MOD) + MOD) % MOD;

      if (j > limit) {
        dp[i][j][1] = dp[i][j - 1][1] + dp[i][j - 1][0] - dp[i][j - limit - 1][0];
      } else {
        dp[i][j][1] = dp[i][j - 1][1] + dp[i][j - 1][0];
      }
      dp[i][j][1] = ((dp[i][j][1] % MOD) + MOD) % MOD;
    }
  }
  return (dp[zero][one][0] + dp[zero][one][1]) % MOD;
};

var zero = 1,
  one = 1,
  limit = 2;
var expected = 2;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);

var zero = 1,
  one = 2,
  limit = 1;
var expected = 1;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);

var zero = 3,
  one = 3,
  limit = 2;
var expected = 14;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);
