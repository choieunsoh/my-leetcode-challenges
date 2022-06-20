// https://leetcode.com/problems/longest-valid-parentheses/
// 32. Longest Valid Parentheses
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return max;
};

var s = '(()';
var expected = 2;
console.log(longestValidParentheses(s), expected);

var s = ')()())';
var expected = 4;
console.log(longestValidParentheses(s), expected);

var s = '()(()';
var expected = 2;
console.log(longestValidParentheses(s), expected);

var s = '()(())';
var expected = 6;
console.log(longestValidParentheses(s), expected);

var s = '';
var expected = 0;
console.log(longestValidParentheses(s), expected);
