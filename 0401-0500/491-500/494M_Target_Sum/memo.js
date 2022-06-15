// https://leetcode.com/problems/target-sum/
// 494. Target Sum
// Recursion with Memoization
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const MIN = -10; // Number.MIN_SAFE_INTEGER
  const total = nums.reduce((sum, num) => sum + num, 0);
  const memo = Array(nums.length)
    .fill(0)
    .map((_) => Array(2 * total + 1).fill(MIN));

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

  const count = backTracking(0, 0);
  console.log(memo);
  return count;
};

var nums = [1, 1, 1, 1, 1],
  target = 3;
var expected = 5;
console.log(findTargetSumWays(nums, target), expected);

var nums = [1],
  target = 1;
var expected = 1;
console.log(findTargetSumWays(nums, target), expected);

var nums = [0, 0, 0, 0, 0, 0, 0, 0, 1],
  target = 1;
var expected = 256;
console.log(findTargetSumWays(nums, target), expected);
