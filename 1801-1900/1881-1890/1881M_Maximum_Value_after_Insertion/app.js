// https://leetcode.com/problems/maximum-value-after-insertion/
// 1881. Maximum Value after Insertion
/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  let i = 0;
  const negative = n[0] === '-';
  const start = negative ? 1 : 0;

  for (i = start; i < n.length; i++) {
    if (negative && x < +n[i]) break;
    if (!negative && x > +n[i]) break;
  }
  return n.substring(0, i) + x + n.substring(i);
};

var addFive = function (n) {
  const x = 5;
  let i = 0;

  for (i = 0; i < n.length; i++) {
    if (x > +n[i]) break;
  }
  return n.substring(0, i) + x + n.substring(i);
};

var n = '962942516613939',
  x = 3;
var expected = '9632942516613939';
var result = maxValue(n, x);
console.log(result, result === expected);

var n = '99',
  x = 9;
var expected = '999';
var result = maxValue(n, x);
console.log(result, result === expected);

var n = '9911',
  x = 3;
var expected = '99311';
var result = maxValue(n, x);
console.log(result, result === expected);

var n = '-13',
  x = 2;
var expected = '-123';
var result = maxValue(n, x);
console.log(result, result === expected);
