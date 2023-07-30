// 664. Strange Printer
// https://leetcode.com/problems/strange-printer/
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  return solve(0, n - 1);

  function solve(left, right) {
    if (dp[left][right]) return dp[left][right];

    dp[left][right] = n;
    for (let i = left; i < right; i++) {
      dp[left][right] = Math.min(dp[left][right], solve(left, i) + solve(i + 1, right));
    }

    if (s[left] === s[right]) {
      dp[left][right]--;
    }
    return dp[left][right];
  }
};

var s = 'aaabbb';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);
