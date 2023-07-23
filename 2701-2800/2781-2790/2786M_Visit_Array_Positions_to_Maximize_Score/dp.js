// 2786. Visit Array Positions to Maximize Score
// https://leetcode.com/problems/visit-array-positions-to-maximize-score/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  const dp = [0, 0];
  dp[nums[0] & 1] = nums[0];
  dp[(nums[0] & 1) ^ 1] = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    const zero = nums[i] & 1;
    const one = zero ^ 1;
    dp[zero] = Math.max(dp[zero] + nums[i], dp[one] + nums[i] - x);
  }
  return Math.max(...dp);
};

var nums = [2, 3, 6, 1, 9, 2],
  x = 5;
var expected = 13;
var result = maxScore(nums, x);
console.log(result, result === expected);

var nums = [2, 4, 6, 8],
  x = 3;
var expected = 20;
var result = maxScore(nums, x);
console.log(result, result === expected);
