// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
var search = function (nums: number[], target: number): number {
  function findMinimum() {
    let min = 0;
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) return min;

    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] < nums[0]) {
        min = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return min;
  }
  function binarySearch(left: number, right: number, target: number): number {
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  const pivot = findMinimum();
  let result = binarySearch(0, pivot - 1, target);
  if (result === -1) {
    result = binarySearch(pivot, nums.length - 1, target);
  }
  return result;
};

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
var expected = 4;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [3, 1],
  target = 0;
var expected = -1;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [1, 3],
  target = 3;
var expected = 1;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 7;
var expected = 3;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 3;
var expected = -1;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [1],
  target = 0;
var expected = -1;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [1],
  target = 1;
var expected = 0;
var result = search(nums, target);
console.log(result, expected, result === expected);

var nums = [3, 4, 5, 6, 1, 2],
  target = 2;
var expected = 5;
var result = search(nums, target);
console.log(result, expected, result === expected);
