// 1106. Parsing A Boolean Expression
// https://leetcode.com/problems/parsing-a-boolean-expression/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let index = 0;
  return evaluate(expression);

  function evaluate(expr) {
    const currChar = expr.charAt(index++);

    // Base cases: true ('t') or false ('f')
    if (currChar === 't') return true;
    if (currChar === 'f') return false;

    // Handle NOT operation '!(...)'
    if (currChar === '!') {
      index++; // Skip '('
      const result = !evaluate(expr);
      index++; // Skip ')'
      return result;
    }

    // Handle AND '&(...)' and OR '|(...)'
    const values = [];
    index++; // Skip '('
    while (expr.charAt(index) !== ')') {
      if (expr.charAt(index) !== ',') {
        values.push(evaluate(expr)); // Collect results of subexpressions
      } else {
        index++; // Skip commas
      }
    }
    index++; // Skip ')'

    // Manual AND operation: returns false if any value is false
    if (currChar === '&') {
      for (const value of values) {
        if (!value) return false;
      }
      return true;
    }

    // Manual OR operation: returns true if any value is true
    if (currChar === '|') {
      for (const value of values) {
        if (value) return true;
      }
      return false;
    }

    return false; // This point should never be reached
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
