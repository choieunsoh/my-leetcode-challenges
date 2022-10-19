// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// 81. Search in Rotated Sorted Array II
var search = function (nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    while (left < right && nums[left] === nums[left + 1]) left++;
    while (left < right && nums[right] === nums[right - 1]) right--;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
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
