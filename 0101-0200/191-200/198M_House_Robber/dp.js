// https://leetcode.com/problems/house-robber/
// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (nums.length === 1) return nums[0];

  const dp = Array.from(nums);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};

var nums = [1, 2, 3, 1];
var expected = 4;
var result = rob(nums);
console.log(result, expected, result === expected);

var nums = [2, 7, 9, 3, 1];
var expected = 12;
var result = rob(nums);
console.log(result, expected, result === expected);
