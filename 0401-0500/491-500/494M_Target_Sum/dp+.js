// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// 2D Dynamic Programming (Space Optimized)
// T.C.: O(n*totalSum)
// S.C.: O(totalSum)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let dp = new Array(totalSum * 2 + 1).fill(0);

  // Initialize the first row of the DP table
  dp[nums[0] + totalSum] = 1; // Adding nums[0]
  dp[-nums[0] + totalSum] += 1; // Subtracting nums[0]

  // Fill the DP table
  for (let index = 1; index < nums.length; index++) {
    const next = new Array(totalSum * 2 + 1).fill(0);
    for (let sum = -totalSum; sum <= totalSum; sum++) {
      if (dp[sum + totalSum] > 0) {
        next[sum + nums[index] + totalSum] += dp[sum + totalSum];
        next[sum - nums[index] + totalSum] += dp[sum + totalSum];
      }
    }
    dp = next;
  }

  // Return the result if the target is within the valid range
  return Math.abs(target) > totalSum ? 0 : dp[target + totalSum];
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
