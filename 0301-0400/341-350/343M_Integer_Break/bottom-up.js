// 343. Integer Break
// https://leetcode.com/problems/integer-break/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  const dp = Array(4).fill(0);
  for (var i = 0; i < dp.length; i++) {
    const fill = i === 1 ? 1 : 0;
    dp[i] = Array(n + 1).fill(fill);
  }

  for (let i = 2; i < 4; i++) {
    for (let sum = 0; sum <= n; sum++) {
      const notPick = dp[i - 1][sum];
      const pick = sum >= i ? i * dp[i][sum - i] : 0;
      dp[i][sum] = Math.max(pick, notPick);
    }
  }

  return dp[3][n];
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
