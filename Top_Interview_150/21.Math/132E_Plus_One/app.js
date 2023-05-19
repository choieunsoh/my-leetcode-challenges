// 66. Plus One
// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = (digits[i] / 10) | 0;
    digits[i] %= 10;
  }
  return carry === 1 ? [carry, ...digits] : digits;
};

var digits = [1, 2, 3];
var expected = [1, 2, 4];
var result = plusOne(digits);
console.log(result, result.join() === expected.join());

var digits = [2, 2, 2, 1];
var expected = [2, 2, 2, 2];
var result = plusOne(digits);
console.log(result, result.join() === expected.join());

var digits = [1, 9];
var expected = [2, 0];
var result = plusOne(digits);
console.log(result, result.join() === expected.join());

var digits = [9];
var expected = [1, 0];
var result = plusOne(digits);
console.log(result, result.join() === expected.join());
