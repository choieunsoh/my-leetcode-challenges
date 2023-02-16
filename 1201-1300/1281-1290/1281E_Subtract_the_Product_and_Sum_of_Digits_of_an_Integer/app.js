// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0;
  let product = 1;
  while (n) {
    const value = n % 10;
    sum += value;
    product *= value;
    n = (n / 10) | 0;
  }
  return product - sum;
};

var n = 234;
var expected = 15;
var result = subtractProductAndSum(n);
console.log(result, result === expected);

var n = 4421;
var expected = 21;
var result = subtractProductAndSum(n);
console.log(result, result === expected);
