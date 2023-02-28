// 66. Plus One
// https://leetcode.com/problems/plus-one/
var plusOne = function (digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + carry;
    carry = (num / 10) | 0;
    digits[i] = num % 10;
  }
  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
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
