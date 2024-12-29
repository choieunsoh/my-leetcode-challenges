// 1746. Maximum Subarray Sum After One Operation
// https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  const dp = Array.from({ length: nums.length }, () => [0, 0]);
  dp[0][0] = nums[0];
  dp[0][1] = nums[0] * nums[0];

  let maxSum = dp[0][1];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const squaredNum = nums[i] * nums[i];
    // without square
    dp[i][0] = Math.max(num, num + dp[i - 1][0]);
    // with square
    dp[i][1] = Math.max(squaredNum, squaredNum + dp[i - 1][0], num + dp[i - 1][1]);

    maxSum = Math.max(maxSum, dp[i][0], dp[i][1]);
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
