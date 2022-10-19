// https://leetcode.com/problems/search-in-rotated-sorted-array/
// 33. Search in Rotated Sorted Array
var search = function (nums: number[], target: number): number {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  if (nums[0] === target) return 0;
  if (nums[nums.length - 1] === target) return nums.length - 1;

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      nums[left] <= target && target < nums[mid]
        ? (right = mid)
        : (left = mid + 1);
    } else {
      nums[mid] < target && target <= nums[right]
        ? (left = mid + 1)
        : (right = mid);
    }
  }

  return -1;
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
