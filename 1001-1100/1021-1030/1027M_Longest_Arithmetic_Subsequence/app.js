// 1027. Longest Arithmetic Subsequence
// https://leetcode.com/problems/longest-arithmetic-subsequence/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  let result = 1;
  const n = nums.length;
  const dp = Array.from({ length: n }, () => new Map());
  for (let right = 0; right < n; right++) {
    for (let left = 0; left < right; left++) {
      const diff = nums[left] - nums[right];
      const leftDiff = dp[left].get(diff) ?? 1;
      const rightDiff = leftDiff + 1;
      dp[right].set(diff, rightDiff);
      result = Math.max(result, rightDiff);
    }
  }

  return result;
};

var nums = [3, 6, 9, 12];
var expected = 4;
var result = longestArithSeqLength(nums);
console.log(result, result === expected);

var nums = [9, 4, 7, 2, 10];
var expected = 3;
var result = longestArithSeqLength(nums);
console.log(result, result === expected);

var nums = [20, 1, 15, 3, 10, 5, 8];
var expected = 4;
var result = longestArithSeqLength(nums);
console.log(result, result === expected);
