// 439. Ternary Expression Parser
// https://leetcode.com/problems/ternary-expression-parser/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  const stack = [];
  for (let i = expression.length - 1; i >= 0; i--) {
    if (stack.length > 0 && stack.at(-1) === '?') {
      stack.pop(); // ?
      const truePart = stack.pop();
      stack.pop(); // :
      const falsePart = stack.pop();
      const result = expression[i] === 'T' ? truePart : falsePart;
      stack.push(result);
    } else {
      stack.push(expression[i]);
    }
  }
  return stack[0];
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
