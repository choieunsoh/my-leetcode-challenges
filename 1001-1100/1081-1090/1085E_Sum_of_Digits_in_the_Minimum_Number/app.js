// 1085. Sum of Digits in the Minimum Number
// https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function (nums) {
  const [ODD, EVEN] = [0, 1];
  let minNum = Math.min(...nums);
  let sumDigit = 0;
  while (minNum > 0) {
    const digit = minNum % 10;
    minNum = (minNum / 10) | 0;
    sumDigit += digit;
  }
  return sumDigit % 2 === 0 ? EVEN : ODD;
};

var nums = [34, 23, 1, 24, 75, 33, 54, 8];
var expected = 0;
var result = sumOfDigits(nums);
console.log(result, result === expected);

var nums = [99, 77, 33, 66, 55];
var expected = 1;
var result = sumOfDigits(nums);
console.log(result, result === expected);
