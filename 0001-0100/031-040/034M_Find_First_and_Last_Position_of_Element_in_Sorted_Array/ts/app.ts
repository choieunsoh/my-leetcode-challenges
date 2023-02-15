// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function (nums: number[], target: number): number[] {
  function lowerBound(left: number, right: number, target: number): number {
    let index = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] >= target) {
        if (nums[mid] === target) index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
  function upperBound(left: number, right: number, target: number): number {
    let index = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] <= target) {
        if (nums[mid] === target) index = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return index;
  }
  const lower = lowerBound(0, nums.length - 1, target);
  const upper = upperBound(lower, nums.length - 1, target);
  return [lower, upper];
};

var nums = [5, 7, 7, 8, 8, 10],
  target = 8;
var expected = [3, 4];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [5, 7, 7, 8, 8, 10],
  target = 6;
var expected = [-1, -1];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3],
  target = 1;
var expected = [0, 0];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums: number[] = [],
  target = 0;
var expected = [-1, -1];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 4],
  target = 4;
var expected = [1, 1];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  target = 7;
var expected = [0, 21];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 10],
  target = 8;
var expected = [11, 14];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());

var nums = [5, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 10],
  target = 8;
var expected = [7, 10];
var result = searchRange(nums, target);
console.log(result, result.join() === expected.join());
