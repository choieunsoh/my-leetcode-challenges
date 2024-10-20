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
  const operators = '!&|';
  for (const ch of expression) {
    if (ch === '(' || ch === ',') continue;
    if (ch === ')') {
      let hasTrue = false;
      let hasFalse = false;
      while (!operators.includes(stack.at(-1))) {
        const value = stack.pop();
        if (value === 't') hasTrue = true;
        if (value === 'f') hasFalse = true;
      }

      const operator = stack.pop(); // = !,&,|
      if (operator === '!') {
        const value = hasTrue ? 'f' : 't';
        stack.push(value);
      } else if (operator === '&') {
        const value = hasFalse ? 'f' : 't';
        stack.push(value);
      } else if (operator === '|') {
        const value = hasTrue ? 't' : 'f';
        stack.push(value);
      }
    } else {
      // t,f,!,&,|
      stack.push(ch);
    }
  }
  return stack[0] === 't';
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
