// https://leetcode.com/problems/house-robber/
// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length < 3) return Math.max(...nums);

  const dp = new Array(nums.length).fill(-1);

  const robx = (nums, dp, n) => {
    if (n === nums.length - 1) return nums[n];
    if (n > nums.length - 1) return 0;
    if (dp[n] > -1) return dp[n];

    const money = Math.max(
      nums[n] + robx(nums, dp, n + 2),
      robx(nums, dp, n + 1)
    );

    return (dp[n] = money);
  };

  return robx(nums, dp, 0);
};

var nums = [1, 2, 3, 1];
var expected = 4;
var result = rob(nums);
console.log(result, expected, result === expected);

var nums = [2, 7, 9, 3, 1];
var expected = 12;
var result = rob(nums);
console.log(result, expected, result === expected);
