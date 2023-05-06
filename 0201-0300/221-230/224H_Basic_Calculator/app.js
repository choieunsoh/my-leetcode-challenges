// 224. Basic Calculator
// https://leetcode.com/problems/basic-calculator/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let result = 0;
  let sign = 1;
  let number = 0;
  for (const ch of s) {
    if (ch === ' ') continue;
    if (ch === '+' || ch === '-') {
      result += sign * number;
      number = 0;
      sign = ch === '+' ? 1 : -1;
    } else if (ch === '(') {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (ch === ')') {
      result += sign * number;
      number = 0;
      result *= stack.pop();
      result += stack.pop();
    } else {
      number = 10 * number + Number(ch);
    }
  }

  if (number !== 0) result += sign * number;
  return result;
};

var s = '11 + 12';
var expected = 23;
var result = calculate(s);
console.log(result, result === expected);

var s = '1 + 1';
var expected = 2;
var result = calculate(s);
console.log(result, result === expected);

var s = ' 2-1 + 2 ';
var expected = 3;
var result = calculate(s);
console.log(result, result === expected);

var s = '(1+(4+5+2)-3)+(6+8)';
var expected = 23;
var result = calculate(s);
console.log(result, result === expected);

var s = '(1+(4+5+2)-3)-(2+4)';
var expected = 3;
var result = calculate(s);
console.log(result, result === expected);
