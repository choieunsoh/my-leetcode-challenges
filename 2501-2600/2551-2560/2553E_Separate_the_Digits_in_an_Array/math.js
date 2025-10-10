// 2553. Separate the Digits in an Array
// https://leetcode.com/problems/separate-the-digits-in-an-array/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const result = [];
  for (let num of nums) {
    if (num === 0) {
      result.push(0);
      continue;
    }

    const tempDigits = [];
    while (num > 0) {
      tempDigits.push(num % 10);
      num = Math.floor(num / 10);
    }

    for (let i = tempDigits.length - 1; i >= 0; i--) {
      result.push(tempDigits[i]);
    }
  }
  return result;
};

var nums = [13, 25, 83, 77];
var expected = [1, 3, 2, 5, 8, 3, 7, 7];
var result = separateDigits(nums);
console.log(result, result.join() === expected.join());

var nums = [7, 1, 3, 9];
var expected = [7, 1, 3, 9];
var result = separateDigits(nums);
console.log(result, result.join() === expected.join());
