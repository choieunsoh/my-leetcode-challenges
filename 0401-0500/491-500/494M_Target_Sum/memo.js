// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// Recursion with Memoization
// T.C.: O(n*totalSum)
// S.C.: O(n*totalSum)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const MIN = -10;
  const total = nums.reduce((sum, num) => sum + num, 0);
  const memo = Array.from({ length: nums.length }, () => new Array(total * 2 + 1).fill(MIN));

  function backTracking(index = 0, sum = 0) {
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }

    if (memo[index][sum + total] !== MIN) {
      return memo[index][sum + total];
    }

    const plus = backTracking(index + 1, sum + nums[index]);
    const minus = backTracking(index + 1, sum - nums[index]);
    return (memo[index][sum + total] = plus + minus);
  }

  return backTracking(0, 0);
};

var nums = [1, 1, 1, 1, 1],
  target = 3;
var expected = 5;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [1],
  target = 1;
var expected = 1;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0, 0, 0, 1],
  target = 1;
var expected = 256;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);
