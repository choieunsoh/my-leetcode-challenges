// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitCount = 0;

  for (const num of nums) {
    const length = num.toString().length;
    if (length % 2 == 0) evenDigitCount++;
  }

  return evenDigitCount;
};

var nums = [12, 345, 2, 6, 7896];
var expected = 2;
var result = findNumbers(nums);
console.log(result, result === expected);

var nums = [555, 901, 482, 1771];
var expected = 1;
var result = findNumbers(nums);
console.log(result, result === expected);
