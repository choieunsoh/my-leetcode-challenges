// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  return carry === 1 ? [carry, ...digits] : digits;
};

var digits = [1, 2, 3];
console.log(plusOne(digits));

var digits = [2, 2, 2, 1];
console.log(plusOne(digits));

var digits = [1, 9];
console.log(plusOne(digits));

var digits = [9];
console.log(plusOne(digits));
