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
    let j = expression.length - 1;
    while (!isValidAtomic(expression.substring(j - 4, j + 1))) {
      j--;
    }

    expression =
      expression.substring(0, j - 4) +
      solveAtomic(expression.substring(j - 4, j + 1)) +
      expression.substring(j + 1, expression.length);
  }

  // Return the final character
  return expression;

  function isValidAtomic(s) {
    // Checks if the string s is a valid atomic expression
    return (
      'TF'.includes(s[0]) &&
      s[1] === '?' &&
      'TF0123456789'.includes(s[2]) &&
      s[3] === ':' &&
      'TF0123456789'.includes(s[4])
    );
  }

  function solveAtomic(s) {
    // Returns the value of the atomic expression
    return s[0] === 'T' ? s.substring(2, 3) : s.substring(4, 5);
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
