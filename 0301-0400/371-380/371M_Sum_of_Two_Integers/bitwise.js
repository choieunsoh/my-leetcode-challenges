// 371. Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b) {
    const c = (a & b) << 1;
    a = a ^ b;
    b = c;
  }
  return a;
};
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function subtract(a, b) {
  while (b) {
    const borrow = ~a & b;
    a = a ^ b;
    b = borrow << 1;
  }
  return a;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function multiply(a, b) {
  let result = 0;
  while (b) {
    if (b & 1) {
      result = add(result, a);
    }
    a <<= 1;
    b >>= 1;
  }
  return result;
}

var a = 1,
  b = 2;
var expected = 3;
var result = add(a, b);
console.log(result, result === expected);

var a = 2,
  b = 3;
var expected = 5;
var result = add(a, b);
console.log(result, result === expected);

var a = 7,
  b = 7;
var expected = 14;
var result = add(a, b);
console.log(result, result === expected);

var a = 20,
  b = 30;
var expected = 50;
var result = add(a, b);
console.log(result, result === expected);

var a = 444,
  b = 333;
var expected = 777;
var result = add(a, b);
console.log(result, result === expected);

var a = 444,
  b = 333;
var expected = 111;
var result = subtract(a, b);
console.log(result, result === expected);

var a = 444,
  b = 333;
var expected = a * b;
var result = multiply(a, b);
console.log(result, result === expected);
