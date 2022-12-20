// this.https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray
/*
Brute Force
Time Complexity - O(N^2)
Space Complexity - O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }

  return max;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var expected = 6;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [1];
var expected = 1;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [5, 4, -1, 7, 8];
var expected = 23;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var expected = 6;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);
