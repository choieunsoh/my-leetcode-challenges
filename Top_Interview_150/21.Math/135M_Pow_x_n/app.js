// 50. Pow(x, n)
// https://leetcode.com/problems/powx-n/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 !== 0) return x * myPow(x, n - 1);
  return myPow(x * x, n / 2);
};

var x = 2.0,
  n = 10,
  expected = 1024.0;
var result = myPow(x, n);
console.log(result, result === expected);

var x = 2.1,
  n = 3,
  expected = 9.261;
var result = myPow(x, n);
console.log(result, result === expected);

var x = 2.0,
  n = -2,
  expected = 0.25;
var result = myPow(x, n);
console.log(result, result === expected);
