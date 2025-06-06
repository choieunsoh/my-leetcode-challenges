// 1746. Maximum Subarray Sum After One Operation
// https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  let maxSum = 0;
  let maxSumWithSquared = 0;
  let maxSumWithoutSquared = 0;
  let i = -1;
  while (++i < nums.length) {
    maxSumWithSquared = Math.max(maxSumWithSquared + nums[i], maxSumWithoutSquared + nums[i] ** 2);
    maxSumWithoutSquared = Math.max(0, maxSumWithoutSquared + nums[i]);
    maxSum = Math.max(maxSum, maxSumWithSquared);
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
