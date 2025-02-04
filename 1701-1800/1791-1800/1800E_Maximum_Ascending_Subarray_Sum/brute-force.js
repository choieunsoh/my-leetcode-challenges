// 1800. Maximum Ascending Subarray Sum
// https://leetcode.com/problems/maximum-ascending-subarray-sum/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maxSum = 0;

  // Outer loop to start from each element in the array
  for (let startIdx = 0; startIdx < nums.length; startIdx++) {
    let currentSubarraySum = nums[startIdx];

    // Inner loop to check the next elements forming an ascending subarray
    for (let endIdx = startIdx + 1; endIdx < nums.length && nums[endIdx] > nums[endIdx - 1]; endIdx++) {
      currentSubarraySum += nums[endIdx];
    }

    // Update maxSum if we find a larger ascending subarray sum
    maxSum = Math.max(maxSum, currentSubarraySum);
  }

  return maxSum;
};

var nums = [10, 20, 30, 5, 10, 50];
var expected = 65;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [10, 20, 30, 40, 50];
var expected = 150;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [12, 17, 15, 13, 10, 11, 12];
var expected = 33;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [2];
var expected = 2;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [5, 4, 3, 2, 1];
var expected = 5;
var result = maxAscendingSum(nums);
console.log(result, result === expected);
