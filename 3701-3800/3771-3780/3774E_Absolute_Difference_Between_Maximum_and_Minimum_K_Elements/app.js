// 3774. Absolute Difference Between Maximum and Minimum K Elements
// https://leetcode.com/problems/absolute-difference-between-maximum-and-minimum-k-elements/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
  let diff = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0, j = nums.length - 1; i < k; i++, j--) {
    diff += nums[j] - nums[i];
  }
  return diff;
};

var nums = [5, 2, 2, 4],
  k = 2;
var expected = 5;
var result = absDifference(nums, k);
console.log(result, result === expected);

var nums = [100],
  k = 1;
var expected = 0;
var result = absDifference(nums, k);
console.log(result, result === expected);
