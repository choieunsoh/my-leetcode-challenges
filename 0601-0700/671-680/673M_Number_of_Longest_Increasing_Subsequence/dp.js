// 673. Number of Longest Increasing Subsequence
// https://leetcode.com/problems/number-of-longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);
  const counts = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 === dp[i]) {
          counts[i] += counts[j];
        } else if (dp[j] + 1 > dp[i]) {
          counts[i] = counts[j];
          dp[i] = dp[j] + 1;
        }
      }
    }
  }

  let result = 0;
  const maxLen = Math.max(...dp);
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === maxLen) {
      result += counts[i];
    }
  }

  return result;
};

var nums = [1, 3, 5, 4, 7];
var expected = 2;
var result = findNumberOfLIS(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 2];
var expected = 5;
var result = findNumberOfLIS(nums);
console.log(result, result === expected);
