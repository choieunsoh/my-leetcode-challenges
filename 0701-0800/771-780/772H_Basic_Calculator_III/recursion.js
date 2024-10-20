// 772. Basic Calculator III
// https://leetcode.com/problems/basic-calculator-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const nums = new Set('0123456789'.split(''));

  s += '=';
  let index = 0;
  return solve();

  function solve() {
    const stack = [];
    let previousOperator = '+';
    let curr = 0;
    while (index < s.length) {
      const ch = s[index];
      if (ch === '(') {
        index++;
        curr = solve();
      } else if (nums.has(ch)) {
        curr = curr * 10 + Number(ch);
      } else {
        if (previousOperator === '*' || previousOperator === '/') {
          stack.push(evaluate(previousOperator, stack.pop(), curr));
        } else {
          stack.push(evaluate(previousOperator, curr, 0));
        }

        if (ch === ')') break;

        curr = 0;
        previousOperator = ch;
      }
      index++;
    }

    let result = 0;
    for (const num of stack) {
      result += Number(num);
    }
    return result;
  }

  function evaluate(operator, a, b) {
    if (operator === '+') return a;
    if (operator === '-') return -a;
    if (operator === '*') return a * b;
    return (a / b) | 0;
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

var s = '5-3/2';
var expected = 4;
var result = calculate(s);
console.log(result, result === expected);
