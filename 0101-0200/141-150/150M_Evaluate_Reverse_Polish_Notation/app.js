// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// 150. Evaluate Reverse Polish Notation
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const opts = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
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
console.log(evalRPN(tokens), expected);

var tokens = ['4', '13', '5', '/', '+'];
var expected = 6;
console.log(evalRPN(tokens), expected);

var tokens = [
  '10',
  '6',
  '9',
  '3',
  '+',
  '-11',
  '*',
  '/',
  '*',
  '17',
  '+',
  '5',
  '+',
];
var expected = 22;
console.log(evalRPN(tokens), expected);
