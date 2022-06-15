// https://leetcode.com/problems/target-sum/
// 494. Target Sum
// Brute Force - Back Tracking
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;

  function backTracking(index = 0, total = 0) {
    if (index === nums.length) {
      if (total === target) count++;
      return;
    }

    backTracking(index + 1, total + nums[index]);
    backTracking(index + 1, total - nums[index]);
  }

  backTracking();
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
