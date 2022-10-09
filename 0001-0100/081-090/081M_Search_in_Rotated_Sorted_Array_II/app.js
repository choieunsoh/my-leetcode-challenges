// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// 81. Search in Rotated Sorted Array II
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  nums = [...new Set(nums)];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

var nums = [2, 5, 6, 0, 0, 1, 2],
  target = 0;
var expected = true;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [2, 5, 6, 0, 0, 1, 2],
  target = 3;
var expected = false;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [1, 0, 1, 1, 1],
  target = 0;
var expected = true;
var result = search(nums, target);
console.log(result, expected, result === expected);
