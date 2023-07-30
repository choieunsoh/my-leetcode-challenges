// 664. Strange Printer
// https://leetcode.com/problems/strange-printer/
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let length = 1; length <= n; length++) {
    for (let left = 0; left <= n - length; left++) {
      const right = left + length - 1;
      const charR = s.charAt(right);
      let j = -1;
      dp[left][right] = n;
      for (let i = left; i < right; i++) {
        if (s.charAt(i) !== charR && j === -1) {
          j = i;
        }
        if (j !== -1) {
          dp[left][right] = Math.min(dp[left][right], 1 + dp[j][i] + dp[i + 1][right]);
        }
      }
      if (j === -1) {
        dp[left][right] = 0;
      }
    }
  }
  return dp[0][n - 1] + 1;
};

var s = 'aaabbb';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);
