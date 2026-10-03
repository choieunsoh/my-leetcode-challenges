// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0;
  let right = 0;
  let maxlength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * right);
    } else if (right > left) {
      left = right = 0;
    }
  }

  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return maxlength;
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
