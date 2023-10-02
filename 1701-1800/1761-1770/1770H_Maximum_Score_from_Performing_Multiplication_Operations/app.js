// 1770. Maximum Score from Performing Multiplication Operations
// https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
// T.C.: O(M^2)
// S.C.: O(M)
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const dp = new Array(m + 1).fill(0);
  for (let op = m - 1; op >= 0; op--) {
    for (let left = 0; left <= op; left++) {
      dp[left] = Math.max(
        multipliers[op] * nums[left] + dp[left + 1],
        multipliers[op] * nums[n - 1 - (op - left)] + dp[left]
      );
    }
  }

  return dp[0];
};

var nums = [1, 2, 3],
  multipliers = [3, 2, 1];
var expected = 14;
var result = maximumScore(nums, multipliers);
console.log(result, result === expected);

var nums = [-5, -3, -3, -2, 7, 1],
  multipliers = [-10, -5, 3, 4, 6];
var expected = 102;
var result = maximumScore(nums, multipliers);
console.log(result, result === expected);
