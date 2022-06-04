// this.https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray
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
  let max = Number.MIN_SAFE_INTEGER;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cur > 0) {
      cur += nums[i];
    } else {
      cur = nums[i];
    }
    max = Math.max(max, cur);
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
