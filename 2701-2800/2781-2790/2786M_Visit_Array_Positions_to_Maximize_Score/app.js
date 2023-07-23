// 2786. Visit Array Positions to Maximize Score
// https://leetcode.com/problems/visit-array-positions-to-maximize-score/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => [-1, -1]);
  return solve(0, nums[0] & 1);

  function solve(index, prev) {
    if (index === n) return 0;
    if (dp[index][prev] !== -1) return dp[index][prev];

    let pick = Number.MIN_SAFE_INTEGER;
    const num = nums[index];
    const newPrev = num & 1;
    if (num & 1) {
      if (prev !== 0) {
        pick = num + solve(index + 1, newPrev);
      } else {
        pick = num - x + solve(index + 1, newPrev);
      }
    } else {
      if (prev === 0) {
        pick = num + solve(index + 1, newPrev);
      } else {
        pick = num - x + solve(index + 1, newPrev);
      }
    }

    const notPick = 0 + solve(index + 1, prev);
    dp[index][prev] = Math.max(notPick, pick);
    return dp[index][prev];
  }
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
