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
  const stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxans = Math.max(maxans, i - stack[stack.length - 1]);
      }
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
