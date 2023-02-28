// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
var evalRPN = function (tokens: string[]): number {
  const opts: { [key: string]: Function } = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => (a / b) | 0,
  };
  const stack: number[] = [];
  for (const token of tokens) {
    if (opts[token]) {
      const b = stack.pop();
      const a = stack.pop();
      const c = opts[token](a, b);
      stack.push(c);
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
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
