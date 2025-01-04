// 3409. Longest Subsequence With Decreasing Adjacent Difference
// https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/description/
// T.C.: O(n * (300 + 300)) = O(n)
// S.C.: O(302 * 302) = O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  // Create a 2D array for dynamic programming
  const dp = Array.from({ length: 302 }, () => new Array(302).fill(0));

  // Iterate through the array from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    // For each possible next number
    for (let next = 1; next <= 300; next++) {
      const diff = Math.abs(next - num);
      dp[num][diff] = Math.max(dp[num][diff], dp[next][diff] + 1);
    }

    // Update dp values for current number
    for (let j = 1; j <= 300; j++) {
      dp[num][j] = Math.max(dp[num][j], dp[num][j - 1]);
    }
  }

  // Find the maximum value in dp array
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= 301; ++i) {
    for (let j = 0; j <= 301; ++j) {
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
};

var nums = [16, 6, 3];
var expected = 3;
var result = longestSubsequence(nums);
console.log(result, result === expected);

var nums = [6, 5, 3, 4, 2, 1];
var expected = 4;
var result = longestSubsequence(nums);
console.log(result, result === expected);

var nums = [10, 20, 10, 19, 10, 20];
var expected = 5;
var result = longestSubsequence(nums);
console.log(result, result === expected);
