// 3345. Smallest Divisible Digit Product I
// https://leetcode.com/problems/smallest-divisible-digit-product-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
  for (let num = n; num <= 100; num++) {
    const product = productDigits(num);
    if (product % t === 0) {
      return num;
    }
  }
  return 0;

  function productDigits(num) {
    let product = 1;
    while (num > 0) {
      const digit = num % 10;
      num = (num / 10) | 0;
      product *= digit;
    }
    return product;
  }
};

var n = 10,
  t = 2;
var expected = 10;
var result = smallestNumber(n, t);
console.log(result, result === expected);

var n = 15,
  t = 3;
var expected = 16;
var result = smallestNumber(n, t);
console.log(result, result === expected);
