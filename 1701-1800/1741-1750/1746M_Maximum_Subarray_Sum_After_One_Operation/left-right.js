// 1746. Maximum Subarray Sum After One Operation
// https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  const n = nums.length;

  // Arrays to store the maximum sum of subarrays ending before and starting after each element
  const maxLeft = new Array(n).fill(0);
  const maxRight = new Array(n).fill(0);

  // No subarray ends before the first element, so set maxLeft[0] to 0
  maxLeft[0] = 0;
  for (let i = 1; i < n; i++) {
    // Compute maxLeft[i]: the maximum subarray sum ending just before nums[i]
    maxLeft[i] = Math.max(0, maxLeft[i - 1] + nums[i - 1]);
  }

  // No subarray starts after the last element, so set maxRight[n - 1] to 0
  maxRight[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    // Compute maxRight[i]: the maximum subarray sum starting just after nums[i]
    maxRight[i] = Math.max(0, maxRight[i + 1] + nums[i + 1]);
  }

  // Initialize the maximum sum as 0
  let maxSum = 0;

  // Iterate over each element in the array
  for (let i = 0; i < n; i++) {
    // Calculate the maximum sum by combining the best left and right subarrays found for each element
    maxSum = Math.max(maxSum, maxLeft[i] + nums[i] * nums[i] + maxRight[i]);
  }

  return maxSum;
};

var nums = [2, -1, -4, -3];
var expected = 17;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);

var nums = [1, -1, 1, 1, -1, -1, 1];
var expected = 4;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);
