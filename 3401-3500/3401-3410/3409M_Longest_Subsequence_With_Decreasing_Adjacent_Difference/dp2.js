// 3409. Longest Subsequence With Decreasing Adjacent Difference
// https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/description/
// T.C.: O(n * maxNum)
// S.C.: O(maxNum * maxDiff)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  const n = nums.length;
  const maxNum = Math.max(...nums);
  const maxDiff = maxNum - Math.min(...nums);

  const dp = Array.from({ length: maxNum + 1 }, () => new Array(maxDiff + 1).fill(0));
  let totalSubsequences = 1;

  // traverse nums from right to left (convert task to 'find longest increasing subsequence of diffs')
  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];

    //control increasing order
    for (let diff = 0; diff <= maxDiff; diff++) {
      const currentLen = dp[num][diff];
      const prevLen = dp[num][diff - 1] || 0;
      dp[num][diff] = Math.max(
        currentLen,
        prevLen,
        // for each num, find the previous values that can form the diff: [num - diff, num] or [num + diff, num]
        1 + (dp[num - diff]?.[diff] || 0),
        1 + (dp[num + diff]?.[diff] || 0)
      );

      totalSubsequences = Math.max(totalSubsequences, dp[nums[i]][diff]);
    }
  }

  return totalSubsequences;
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
