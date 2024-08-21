// 664. Strange Printer
// https://leetcode.com/problems/strange-printer/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length;
  const dp = [];

  for (let left = n - 1; left >= 0; left--) {
    dp[left] = [];
    dp[left][left] = 1;

    for (let right = left + 1; right < n; right++) {
      if (s[left] === s[right]) {
        dp[left][right] = dp[left][right - 1];
      } else {
        let min = n;
        for (let i = left; i < right; i++) {
          min = Math.min(min, dp[left][i] + dp[i + 1][right]);
        }
        dp[left][right] = min;
      }
    }
  }

  return dp[0][n - 1];
};

var s = 'aaabbb';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);
