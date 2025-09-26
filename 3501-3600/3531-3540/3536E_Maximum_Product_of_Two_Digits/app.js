// 3536. Maximum Product of Two Digits
// https://leetcode.com/problems/maximum-product-of-two-digits/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
  let max = 0;
  let secondMax = 0;
  while (n > 0) {
    const digit = n % 10;
    n = (n / 10) | 0;

    if (digit >= max) {
      secondMax = max;
      max = digit;
    } else if (digit >= secondMax) {
      secondMax = digit;
    }
  }
  return max * secondMax;
};

var n = 31;
var expected = 3;
var result = maxProduct(n);
console.log(result, result === expected);

var n = 22;
var expected = 4;
var result = maxProduct(n);
console.log(result, result === expected);

var n = 124;
var expected = 8;
var result = maxProduct(n);
console.log(result, result === expected);
