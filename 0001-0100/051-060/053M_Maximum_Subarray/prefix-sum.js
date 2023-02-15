// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
/*
Prefix Sum
Time Complexity - O(N + N^2) ~ O(N^2)
Space Complexity - O(N)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const sum = new Array(nums.length + 1).fill(0);
  sum[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum[i + 1] = nums[i] + sum[i];
  }

  let max = nums[0];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      max = Math.max(max, sum[j] - sum[i]);
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
