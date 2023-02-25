// 227. Basic Calculator II
// https://leetcode.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  const nums = new Set('0123456789'.split(''));
  const ops = new Set(['+', '-', '*', '/']);
  const q = [];
  let op = '+';
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (nums.has(ch)) {
      num = num * 10 + Number(ch);
    }
    if (ops.has(ch) || i === s.length - 1) {
      if (op === '-') {
        num *= -1;
      } else if (op == '*') {
        num *= q.pop();
      } else if (op == '/') {
        num = (q.pop() / num) | 0;
      }
      q.push(num);
      op = ch;
      num = 0;
    }
  }
  return q.reduce((sum, num) => sum + num, 0);
};

var s = '3+2*22';
var expected = 47;
var result = calculate(s);
console.log(result, result === expected);

var s = ' 3/2 ';
var expected = 1;
var result = calculate(s);
console.log(result, result === expected);

var s = ' 3+5 / 2 ';
var expected = 5;
var result = calculate(s);
console.log(result, result === expected);
