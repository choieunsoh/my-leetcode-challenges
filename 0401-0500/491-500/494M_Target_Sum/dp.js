// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// 2D Dynamic Programming
// T.C.: O(n*totalSum)
// S.C.: O(n*totalSum)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const dp = Array.from({ length: nums.length }, () => new Array(totalSum * 2 + 1).fill(0));

  // Initialize the first row of the DP table
  dp[0][nums[0] + totalSum] = 1;
  dp[0][-nums[0] + totalSum] += 1;

  // Fill the DP table
  for (let index = 1; index < nums.length; index++) {
    for (let sum = -totalSum; sum <= totalSum; sum++) {
      if (dp[index - 1][sum + totalSum] > 0) {
        dp[index][sum + nums[index] + totalSum] += dp[index - 1][sum + totalSum];
        dp[index][sum - nums[index] + totalSum] += dp[index - 1][sum + totalSum];
      }
    }
  }

  // Return the result if the target is within the valid range
  return Math.abs(target) > totalSum ? 0 : dp[nums.length - 1][target + totalSum];
};

var nums = [1, 1, 1, 1, 1],
  target = 3;
var expected = 5;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [1],
  target = 1;
var expected = 1;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0, 0, 0, 1],
  target = 1;
var expected = 256;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);
