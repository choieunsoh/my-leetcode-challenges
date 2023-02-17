// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    const c = (a & b) << 1;
    a = a ^ b;
    b = c;
  }
  return a;
};

var a = 1,
  b = 2;
var expected = 3;
var result = getSum(a, b);
console.log(result, result === expected);

var a = 2,
  b = 3;
var expected = 5;
var result = getSum(a, b);
console.log(result, result === expected);

var a = 7,
  b = 7;
var expected = 14;
var result = getSum(a, b);
console.log(result, result === expected);

var a = 20,
  b = 30;
var expected = 50;
var result = getSum(a, b);
console.log(result, result === expected);

var a = 444,
  b = 333;
var expected = 777;
var result = getSum(a, b);
console.log(result, result === expected);
