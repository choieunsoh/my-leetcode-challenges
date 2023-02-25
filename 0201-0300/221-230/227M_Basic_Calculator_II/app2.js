// 227. Basic Calculator II
// https://leetcode.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const q = [];
  let op = '+';
  let num = 0;
  for (const ch of s) {
    switch (ch) {
      case ' ':
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        eval(num, op);
        op = ch;
        num = 0;
        break;
      default:
        num = num * 10 + Number(ch);
        break;
    }
  }
  eval(num, op);

  return q.reduce((sum, num) => sum + num, 0);

  function eval(num, op) {
    switch (op) {
      case '+':
        q.push(num);
        break;
      case '-':
        q.push(num * -1);
        break;
      case '*':
        q.push(q.pop() * num);
        break;
      case '/':
        q.push((q.pop() / num) | 0);
        break;
    }
  }
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
