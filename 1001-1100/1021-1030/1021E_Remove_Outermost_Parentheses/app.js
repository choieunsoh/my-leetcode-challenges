// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = '';
  let openCount = 0;
  let left = 1;
  for (let right = 0; right < s.length; right++) {
    if (s.charAt(right) === '(') {
      openCount++;
    } else {
      openCount--;
    }
    if (openCount === 0) {
      result += s.substring(left, right);
      left = right + 2;
    }
  }
  return result;
};

var s = '(()())(())';
var expected = '()()()';
var result = removeOuterParentheses(s);
console.log(result, result === expected);

var s = '(()())(())(()(()))';
var expected = '()()()()(())';
var result = removeOuterParentheses(s);
console.log(result, result === expected);

var s = '()()';
var expected = '';
var result = removeOuterParentheses(s);
console.log(result, result === expected);

var s = '()';
var expected = '';
var result = removeOuterParentheses(s);
console.log(result, result === expected);
