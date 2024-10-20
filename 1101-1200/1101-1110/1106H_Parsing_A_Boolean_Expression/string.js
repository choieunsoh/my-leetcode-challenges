// 1106. Parsing A Boolean Expression
// https://leetcode.com/problems/parsing-a-boolean-expression/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  // Repeatedly simplify the expression by evaluating subexpressions
  while (expression.length > 1) {
    const startIndex = Math.max(
      expression.lastIndexOf('!'),
      Math.max(expression.lastIndexOf('&'), expression.lastIndexOf('|'))
    );
    const endIndex = expression.indexOf(')', startIndex);
    const subExpr = expression.substring(startIndex, endIndex + 1);
    const result = evaluateSubExpr(subExpr);
    expression = expression.substring(0, startIndex) + result + expression.substring(endIndex + 1);
  }
  return expression[0] === 't';

  function evaluateSubExpr(subExpr) {
    // Extract the operator and the enclosed values
    const op = subExpr[0];
    const values = subExpr.substring(2, subExpr.length - 1);
    // Apply logical operations based on the operator
    if (op === '!') return values[0] == 't' ? 'f' : 't';
    if (op === '&') return values.includes('f') ? 'f' : 't';
    if (op === '|') return values.includes('t') ? 't' : 'f';
    return 'f'; // This point should never be reached
  }
};

var expression = '&(|(f))';
var expected = false;
var result = parseBoolExpr(expression);
console.log(result, result === expected);

var expression = '|(f,f,f,t)';
var expected = true;
var result = parseBoolExpr(expression);
console.log(result, result === expected);

var expression = '!(&(f,t))';
var expected = true;
var result = parseBoolExpr(expression);
console.log(result, result === expected);
