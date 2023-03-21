// 2348. Number of Zero-Filled Subarrays
// https://leetcode.com/problems/number-of-zero-filled-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let i = 0;
  while (i < nums.length) {
    let count = 0;
    if (nums[i] === 0) {
      count++;
      while (nums[i + 1] === 0) {
        i++;
        count++;
      }
      result += (count * (count + 1)) / 2;
    }
    i++;
  }
  return result;
};

var nums = [1, 3, 0, 0, 2, 0, 0, 4];
var expected = 6;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);

var nums = [0, 0, 0, 2, 0, 0];
var expected = 9;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);

var nums = [2, 10, 2019];
var expected = 0;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);
