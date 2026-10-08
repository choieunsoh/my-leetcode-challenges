// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = '';
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === ')') {
      stack.pop();
    }
    if (stack.length) {
      result += c;
    }
    if (c === '(') {
      stack.push(c);
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
