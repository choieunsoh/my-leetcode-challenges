// 3409. Longest Subsequence With Decreasing Adjacent Difference
// https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/description/
// T.C.: O(n*maxNum)
// S.C.: O(maxNum^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  const n = nums.length;
  const maxNum = Math.max(...nums);
  const dp = Array.from({ length: maxNum + 1 }, () => new Array(maxNum + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];
    for (let next = 1; next <= maxNum; next++) {
      const diff = Math.abs(next - num);
      dp[num][diff] = Math.max(dp[num][diff], dp[next][diff] + 1);
    }

    for (let j = 1; j <= maxNum; j++) {
      dp[num][j] = Math.max(dp[num][j], dp[num][j - 1]);
    }
  }

  return Math.max(...dp.flat());
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
