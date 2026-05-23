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
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return shiftedBinarySearch(nums, left, target);

  function shiftedBinarySearch(nums, pivot, target) {
    const n = nums.length;
    const shift = n - pivot;
    let left = (pivot + shift) % n;
    let right = (pivot - 1 + shift) % n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[(mid - shift + n) % n] == target) {
        return (mid - shift + n) % n;
      } else if (nums[(mid - shift + n) % n] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
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
