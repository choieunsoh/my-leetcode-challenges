// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxans = 0;
  const dp = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] == ')') {
      if (s[i - 1] == '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
        dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      maxans = Math.max(maxans, dp[i]);
    }
  }
  return maxans;
};

var s = '(()';
var expected = 2;
var result = longestValidParentheses(s);
console.log(result, result === expected);

var s = ')()())';
var expected = 4;
var result = longestValidParentheses(s);
console.log(result, result === expected);

var s = '()(()';
var expected = 2;
var result = longestValidParentheses(s);
console.log(result, result === expected);

var s = '()(())';
var expected = 6;
var result = longestValidParentheses(s);
console.log(result, result === expected);

var s = '';
var expected = 0;
var result = longestValidParentheses(s);
console.log(result, result === expected);
