// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
// T.C.: O(2^(2n) * n)
// S.C.: O(2^(2n) * n)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  generate('', n, n, result);
  return result;

  function generate(str, left, right, result) {
    if (!left && !right && str.length) {
      result.push(str);
      return;
    }
    if (left) generate(str + '(', left - 1, right, result);
    if (right > left) generate(str + ')', left, right - 1, result);
  }
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());

var n = 1;
var expected = ['()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());
