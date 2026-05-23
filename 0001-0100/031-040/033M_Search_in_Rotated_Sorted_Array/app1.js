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
  // Find the index of the pivot element (the smallest element)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Binary search over elements on the pivot element's left
  const answer = binarySearch(0, left - 1, target);
  if (answer != -1) {
    return answer;
  }
  // Binary search over elements on the pivot element's right
  return binarySearch(left, n - 1, target);

  function binarySearch(left_boundary, right_boundary, target) {
    let left = left_boundary;
    let right = right_boundary;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
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
