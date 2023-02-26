// 2576. Find the Maximum Number of Marked Indices
// https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  let result = 0;
  const half = (nums.length / 2) | 0;
  nums.sort((a, b) => a - b);
  let j = nums.length - 1;
  for (let i = half - 1; i >= 0; i--) {
    if (2 * nums[i] <= nums[j]) {
      result += 2;
      j--;
    }
  }
  return result;
};

var nums = [3, 5, 2, 4];
var expected = 2;
var result = maxNumOfMarkedIndices(nums);
console.log(result, result === expected);

var nums = [9, 2, 5, 4];
var expected = 4;
var result = maxNumOfMarkedIndices(nums);
console.log(result, result === expected);

var nums = [7, 6, 8];
var expected = 0;
var result = maxNumOfMarkedIndices(nums);
console.log(result, result === expected);

var nums = [42, 83, 48, 10, 24, 55, 9, 100, 10, 17, 17, 99, 51, 32, 16, 98, 99, 31, 28, 68, 71, 14, 64, 29, 15, 40];
var expected = 26;
var result = maxNumOfMarkedIndices(nums);
console.log(result, result === expected);
