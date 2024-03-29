// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (target === nums[0]) return 0;
  if (target === nums[nums.length - 1]) return nums.length - 1;

  const pivot = findPivot(nums);
  if (target === nums[pivot]) return pivot;

  let result = binarySearch(nums, 0, pivot);
  if (result === -1) {
    result = binarySearch(nums, pivot + 1, nums.length - 1);
  }

  return result;

  function findPivot(nums) {
    let pivot = 0;
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) return 0;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[0]) {
        right = mid - 1;
      } else {
        pivot = mid;
        left = mid + 1;
      }
    }
    return pivot;
  }
  function binarySearch(nums, left, right) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
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
