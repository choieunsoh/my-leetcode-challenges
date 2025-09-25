// 3622. Check Divisibility by Digit Sum and Product
// https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  let sum = 0;
  let product = 1;
  let num = n;
  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    product *= digit;
    num = (num / 10) | 0;
  }
  return n % (sum + product) === 0;
};

var n = 99;
var expected = true;
var result = checkDivisibility(n);
console.log(result, result === expected);

var n = 23;
var expected = false;
var result = checkDivisibility(n);
console.log(result, result === expected);

var n = 8;
var expected = false;
var result = checkDivisibility(n);
console.log(result, result === expected);
