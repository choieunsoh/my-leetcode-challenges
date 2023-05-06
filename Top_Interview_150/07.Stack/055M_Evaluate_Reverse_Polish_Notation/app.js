// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const opts = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b) | 0,
  };

  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (opts[tokens[i]] === undefined) {
      stack.push(tokens[i]);
    } else {
      const opt = tokens[i];
      const num2 = stack.pop();
      const num1 = stack.pop();
      const result = opts[opt](+num1, +num2);
      stack.push(result);
    }
  }

  return stack.pop();
};

var tokens = ['2', '1', '+', '3', '*'];
var expected = 9;
var result = evalRPN(tokens);
console.log(result, result === expected);

var tokens = ['4', '13', '5', '/', '+'];
var expected = 6;
var result = evalRPN(tokens);
console.log(result, result === expected);

var tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
var expected = 22;
var result = evalRPN(tokens);
console.log(result, result === expected);
