// https://leetcode.com/problems/search-in-rotated-sorted-array/
// 33. Search in Rotated Sorted Array
var search = function (nums: number[], target: number): number {
  function findPivot(nums: number[]): number {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) return right;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[0]) {
        right = mid - 1;
      } else {
        result = mid;
        left = mid + 1;
      }
    }
    return result;
  }
  function binarySearch(
    nums: number[],
    left: number,
    right: number,
    target: number
  ): number {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return -1;
  }

  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  if (nums[0] === target) return 0;
  if (nums[nums.length - 1] === target) return nums.length - 1;

  const pivot = findPivot(nums);
  if (nums[pivot] === target) return pivot;
  let result = binarySearch(nums, 0, pivot, target);
  if (result === -1) {
    result = binarySearch(nums, pivot + 1, nums.length - 1, target);
  }

  return result;
};

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
  target = 0;
var expected = 4;
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
