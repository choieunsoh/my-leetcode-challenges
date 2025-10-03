// 3099. Harshad Number
// https://leetcode.com/problems/harshad-number/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sumDigits = 0;
  let num = x;
  while (num > 0) {
    sumDigits += num % 10;
    num = (num / 10) | 0;
  }
  return x % sumDigits === 0 ? sumDigits : -1;
};

var x = 18;
var expected = 9;
var result = sumOfTheDigitsOfHarshadNumber(x);
console.log(result, result === expected);

var x = 23;
var expected = -1;
var result = sumOfTheDigitsOfHarshadNumber(x);
console.log(result, result === expected);
