// 53. Maximum Subarray
// this.https://leetcode.com/problems/maximum-subarray/
/*
Kadane's Algo / Dynamic Programming
Time Complexity - O(N)
Space Complexity - O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    sum = Math.max(sum + num, num);
    max = Math.max(max, sum);
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
