// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
// T.C.: O(4^n / sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) {
    return [''];
  }

  const result = [];
  for (let leftCount = 0; leftCount < n; ++leftCount) {
    let leftStrings = generateParenthesis(leftCount);
    let rightStrings = generateParenthesis(n - 1 - leftCount);
    for (let leftString of leftStrings) {
      for (let rightString of rightStrings) {
        result.push('(' + leftString + ')' + rightString);
      }
    }
  }
  return result;
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());

var n = 1;
var expected = ['()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());
