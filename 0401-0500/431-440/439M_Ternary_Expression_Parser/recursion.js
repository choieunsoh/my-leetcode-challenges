// 439. Ternary Expression Parser
// https://leetcode.com/problems/ternary-expression-parser/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  return solve(expression, 0, expression.length - 1);

  function solve(expression, i, j) {
    // If expression is a single character, return it
    if (i === j) {
      return expression[i];
    }

    // Find the index of ?
    let questionMarkIndex = i;
    while (expression[questionMarkIndex] !== '?') {
      questionMarkIndex++;
    }

    // Find one index after corresponding :
    let aheadColonIndex = questionMarkIndex + 1;
    let count = 1;
    while (count !== 0) {
      if (expression[aheadColonIndex] === '?') {
        count++;
      } else if (expression[aheadColonIndex] === ':') {
        count--;
      }
      aheadColonIndex++;
    }

    // Check the value of B and recursively solve
    if (expression[i] === 'T') {
      return solve(expression, questionMarkIndex + 1, aheadColonIndex - 2);
    } else {
      return solve(expression, aheadColonIndex, j);
    }
  }
};

var expression = 'T?2:3';
var expected = '2';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'F?1:T?4:5';
var expected = '4';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'T?T?F:5:3';
var expected = 'F';
var result = parseTernary(expression);
console.log(result, result === expected);
