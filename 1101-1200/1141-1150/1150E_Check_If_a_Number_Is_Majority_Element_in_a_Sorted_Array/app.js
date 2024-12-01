// 1150. Check If a Number Is Majority Element in a Sorted Array
// https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  const left = lowerBound(nums, target);
  const right = upperBound(nums, target);
  if (right - left + 1 > nums.length / 2) return true;
  return false;

  function lowerBound(nums, target) {
    let index = nums.length;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] >= target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }

  function upperBound(nums, target) {
    let index = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] <= target) {
        index = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return index;
  }
};

var nums = [2, 4, 5, 5, 5, 5, 5, 6, 6],
  target = 5;
var expected = true;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);

var nums = [10, 100, 101, 101],
  target = 101;
var expected = false;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  target = 3;
var expected = false;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);
