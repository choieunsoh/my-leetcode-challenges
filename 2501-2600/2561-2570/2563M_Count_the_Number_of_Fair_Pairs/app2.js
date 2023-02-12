// 2563. Count the Number of Fair Pairs
// https://leetcode.com/problems/count-the-number-of-fair-pairs/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  function countSmallerThan(target) {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum <= target) {
        result += right - left;
        left++;
      } else {
        right--;
      }
    }
    return result;
  }

  nums.sort((a, b) => a - b);
  return countSmallerThan(upper) - countSmallerThan(lower - 1);
};

var nums = [0, 1, 7, 4, 4, 5],
  lower = 3,
  upper = 6;
var expected = 6;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);

var nums = [1, 7, 9, 2, 5],
  lower = 11,
  upper = 11;
var expected = 1;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0],
  lower = 0,
  upper = 0,
  expected = 15;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);
