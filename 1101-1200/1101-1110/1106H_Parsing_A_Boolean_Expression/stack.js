// 1106. Parsing A Boolean Expression
// https://leetcode.com/problems/parsing-a-boolean-expression/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const stack = [];

  // Traverse the entire expression
  for (const currChar of expression) {
    if (currChar === ')') {
      const values = [];

      // Gather all values inside the parentheses
      while (stack.at(-1) !== '(') {
        values.push(stack.pop());
      }
      stack.pop(); // Remove '('
      const op = stack.pop(); // Remove the operator

      // Evaluate the subexpression and push the result back
      const result = evaluateSubExpr(op, values);
      stack.push(result);
    } else if (currChar != ',') {
      stack.push(currChar); // Push non-comma characters into the stack
    }
  }

  // Final result is on the top of the stack
  return stack[0] === 't';

  function evaluateSubExpr(op, values) {
    if (op === '!') return values[0] === 't' ? 'f' : 't';

    // AND: return 'f' if any value is 'f', otherwise return 't'
    if (op === '&') {
      for (const value of values) {
        if (value === 'f') return 'f';
      }
      return 't';
    }

    // OR: return 't' if any value is 't', otherwise return 'f'
    if (op === '|') {
      for (const value of values) {
        if (value === 't') return 't';
      }
      return 'f';
    }

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
