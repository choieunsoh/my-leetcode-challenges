// 772. Basic Calculator III
// https://leetcode.com/problems/basic-calculator-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s += '=';
  const operators = new Set('+-*/'.split(''));
  const nums = new Set('0123456789'.split(''));
  const stack = [];
  let previousOperator = '+';
  let curr = '';
  for (const ch of s) {
    if (nums.has(ch)) {
      curr += ch;
    } else if (ch === '(') {
      stack.push(previousOperator);
      previousOperator = '+';
    } else {
      if (previousOperator === '*' || previousOperator === '/') {
        stack.push(evaluate(previousOperator, stack.pop(), curr));
      } else {
        stack.push(evaluate(previousOperator, curr, '0'));
      }

      curr = '';
      previousOperator = ch;
      if (ch === ')') {
        let currentTerm = 0;
        while (stack.length > 0 && !operators.has(stack.at(-1))) {
          currentTerm += Number(stack.pop());
        }

        curr = String(currentTerm);
        previousOperator = stack.pop();
      }
    }
  }

  let result = 0;
  for (const num of stack) {
    result += Number(num);
  }
  return result;

  function evaluate(operator, a, b) {
    if (operator === '+') return Number(a);
    if (operator === '-') return -1 * Number(a);
    if (operator === '*') return Number(a) * Number(b);
    if (operator === '/') return Number(a) / Number(b);
  }
};

var s = '1+1';
var expected = 2;
var result = calculate(s);
console.log(result, result === expected);

var s = '6-4/2';
var expected = 4;
var result = calculate(s);
console.log(result, result === expected);

var s = '2*(5+5*2)/3+(6/2+8)';
var expected = 21;
var result = calculate(s);
console.log(result, result === expected);
