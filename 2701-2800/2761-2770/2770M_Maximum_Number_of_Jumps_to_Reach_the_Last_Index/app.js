// 2770. Maximum Number of Jumps to Reach the Last Index
// https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const n = nums.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] === -1) continue;
    for (let j = i + 1; j < n; j++) {
      const diff = nums[j] - nums[i];
      if (diff >= -target && diff <= target) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }
  return dp[n - 1];
};

var nums = [1, 0, 2],
  target = 1;
var expected = 1;
var result = maximumJumps(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 6, 4, 1, 2],
  target = 2;
var expected = 3;
var result = maximumJumps(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 6, 4, 1, 2],
  target = 3;
var expected = 5;
var result = maximumJumps(nums, target);
console.log(result, result === expected);

var nums = [1, 3, 6, 4, 1, 2],
  target = 0;
var expected = -1;
var result = maximumJumps(nums, target);
console.log(result, result === expected);
