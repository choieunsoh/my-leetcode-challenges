// 3726. Remove Zeros in Decimal Representation
// https://leetcode.com/problems/remove-zeros-in-decimal-representation/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
  let result = 0n;
  let base = 1n;
  let num = BigInt(n);
  while (num > 0n) {
    const digit = num % 10n;
    if (digit > 0n) {
      result += digit * base;
      base *= 10n;
    }
    num /= 10n;
  }
  return Number(result);
};

var n = 1020030;
var expected = 123;
var result = removeZeros(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = removeZeros(n);
console.log(result, result === expected);

var n = 21719508701;
var expected = 217195871;
var result = removeZeros(n);
console.log(result, result === expected);
