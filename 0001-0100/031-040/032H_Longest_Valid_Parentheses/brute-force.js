// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxlen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValid(s.substring(i, j))) {
        maxlen = Math.max(maxlen, j - i);
      }
    }
  }
  return maxlen;

  function isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) == '(') {
        stack.push('(');
      } else if (stack.length !== 0 && stack[stack.length - 1] == '(') {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  }
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
