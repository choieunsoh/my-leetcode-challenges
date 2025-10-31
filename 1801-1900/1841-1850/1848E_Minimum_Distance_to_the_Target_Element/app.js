// 1848. Minimum Distance to the Target Element
// https://leetcode.com/problems/minimum-distance-to-the-target-element/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let left = start;
  let right = start;
  const n = nums.length;
  while (left >= 0 || right < n) {
    if (left >= 0 && nums[left] === target) {
      return Math.abs(start - left);
    }
    if (right < n && nums[right] === target) {
      return Math.abs(start - right);
    }
    left--;
    right++;
  }
  return 0;
};

var nums = [1, 2, 3, 4, 5],
  target = 5,
  start = 3;
var expected = 1;
var result = getMinDistance(nums, target, start);
console.log(result, result === expected);

var nums = [1],
  target = 1,
  start = 0;
var expected = 0;
var result = getMinDistance(nums, target, start);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  target = 1,
  start = 0;
var expected = 0;
var result = getMinDistance(nums, target, start);
console.log(result, result === expected);
