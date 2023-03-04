// 343. Integer Break
// https://leetcode.com/problems/integer-break/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  const dp = Array(n + 1).fill(0);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = Array(5).fill(i === 0 ? 1 : 0);
    dp[i][0] = 1;
  }
  for (let num = 1; num <= 4; num++) {
    for (let i = 1; i <= n; i++) {
      if (i < num) {
        dp[i][num] = dp[i][num - 1];
      } else {
        dp[i][num] = Math.max(dp[i][num - 1], dp[i - num][num] * num);
      }
    }
  }
  return dp[n][4];
};

var n = 2;
var expected = 1;
var result = integerBreak(n);
console.log(result, result === expected);

var n = 10;
var expected = 36;
var result = integerBreak(n);
console.log(result, result === expected);

var n = 4;
var expected = 4;
var result = integerBreak(n);
console.log(result, result === expected);

var n = 8;
var expected = 18;
var result = integerBreak(n);
console.log(result, result === expected);
