// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = left + (((right - left) / 2) | 0);
    // Case 1: find target
    if (nums[mid] == target) return mid;
    // Case 2: Subarray on mid's left is sorted
    else if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Case 3: Subarray on mid's right is sorted
    else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

var nums = [3, 1],
  target = 0;
var expected = -1;
var result = search(nums, target);
console.log(result, result === expected);

var nums = [1, 3],
  target = 3;
var expected = 1;
var result = search(nums, target);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
var expected = 4;
var result = search(nums, target);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 7;
var expected = 3;
var result = search(nums, target);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 3;
var expected = -1;
var result = search(nums, target);
console.log(result, result === expected);

var nums = [1],
  target = 0;
var expected = -1;
var result = search(nums, target);
console.log(result, result === expected);
