// 1060. Missing Element in Sorted Array
// https://leetcode.com/problems/missing-element-in-sorted-array/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let index = 0;
  const lowerBound = nums[0];
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] - mid - lowerBound < k) {
      index = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[0] + k + index;
};

var nums = [4, 7, 9, 10],
  k = 1;
var expected = 5;
var result = missingElement(nums, k);
console.log(result, result === expected);

var nums = [4, 7, 9, 10],
  k = 3;
var expected = 8;
var result = missingElement(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 4],
  k = 3;
var expected = 6;
var result = missingElement(nums, k);
console.log(result, result === expected);
