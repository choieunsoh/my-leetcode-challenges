// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let [start, end] = [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [start, end];
};

var nums = [],
  target = 0;
var expected = [-1, -1];
console.log(searchRange(nums, target), expected);

var nums = [1, 4],
  target = 4;
var expected = [1, 1];
console.log(searchRange(nums, target), expected);

var nums = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  target = 7;
var expected = [0, 21];
console.log(searchRange(nums, target), expected);

var nums = [5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 10],
  target = 8;
var expected = [11, 14];
console.log(searchRange(nums, target), expected);

var nums = [5, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 10],
  target = 8;
var expected = [7, 10];
console.log(searchRange(nums, target), expected);

var nums = [5, 7, 7, 8, 8, 10],
  target = 8;
var expected = [3, 4];
console.log(searchRange(nums, target), expected);

var nums = [5, 7, 7, 8, 8, 10],
  target = 6;
var expected = [-1, -1];
console.log(searchRange(nums, target), expected);

var nums = [],
  target = 0;
var expected = [-1, -1];
