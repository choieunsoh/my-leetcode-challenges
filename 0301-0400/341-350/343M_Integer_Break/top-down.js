// 343. Integer Break
// https://leetcode.com/problems/integer-break/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  const dp = Array(n)
    .fill()
    .map(() => Array(n + 1).fill(-1));
  return dfs(n - 1, n);

  function dfs(num, sum) {
    if (num === 1) return 1;
    if (dp[num][sum] !== -1) return dp[num][sum];
    const notPick = dfs(num - 1, sum);
    const pick = sum >= num ? num * dfs(num, sum - num) : 0;
    dp[num][sum] = Math.max(notPick, pick);
    return dp[num][sum];
  }
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
