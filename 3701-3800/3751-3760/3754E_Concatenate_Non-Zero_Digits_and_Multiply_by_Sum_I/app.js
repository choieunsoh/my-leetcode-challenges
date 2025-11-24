// 3754. Concatenate Non-Zero Digits and Multiply by Sum I
// https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  let x = 0;
  let sum = 0;
  let base = 1;
  while (n > 0) {
    const digit = n % 10;
    if (digit !== 0) {
      x = x + digit * base;
      sum += digit;
      base *= 10;
    }
    n = (n / 10) | 0;
  }
  return x * sum;
};

var n = 10203004;
var expected = 12340;
var result = sumAndMultiply(n);
console.log(result, result === expected);

var n = 1000;
var expected = 1;
var result = sumAndMultiply(n);
console.log(result, result === expected);
