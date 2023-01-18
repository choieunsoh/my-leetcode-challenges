// 918. Maximum Sum Circular Subarray
// https://leetcode.com/problems/maximum-sum-circular-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let curMax = 0,
    curMin = 0,
    sum = 0,
    maxSum = nums[0],
    minSum = nums[0];
  for (const num of nums) {
    curMax = Math.max(curMax, 0) + num;
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin, 0) + num;
    minSum = Math.min(minSum, curMin);
    sum += num;
  }
  return sum == minSum ? maxSum : Math.max(maxSum, sum - minSum);
};

var nums = [1, -2, 3, -2];
var expected = 3;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);

var nums = [5, -3, 5];
var expected = 10;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);

var nums = [-3, -2, -3];
var expected = -2;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);
