// 2770. Maximum Number of Jumps to Reach the Last Index
// https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const n = nums.length;
  const memo = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  const result = dfs(0);
  return result < 0 ? -1 : result;

  function dfs(i) {
    if (i === n - 1) {
      return 0;
    }
    if (memo[i] !== Number.MIN_SAFE_INTEGER) {
      return memo[i];
    }

    let result = Number.MIN_SAFE_INTEGER;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= target) {
        result = Math.max(result, dfs(j) + 1);
      }
    }
    memo[i] = result;
    return result;
  }
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
