// 439. Ternary Expression Parser
// https://leetcode.com/problems/ternary-expression-parser/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  // Reduce expression until we are left with a single character
  while (expression.length !== 1) {
    let questionMarkIndex = expression.length - 1;
    while (expression.charAt(questionMarkIndex) !== '?') {
      questionMarkIndex--;
    }

    // Find the value of the expression.
    let value;
    if (expression.charAt(questionMarkIndex - 1) === 'T') {
      value = expression.charAt(questionMarkIndex + 1);
    } else {
      value = expression.charAt(questionMarkIndex + 3);
    }

    // Replace the expression with the value
    expression = expression.substring(0, questionMarkIndex - 1) + value + expression.substring(questionMarkIndex + 4);
  }

  // Return the final character
  return expression;
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
