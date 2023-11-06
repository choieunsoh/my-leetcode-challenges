// 2529. Maximum Count of Positive Integer and Negative Integer
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const n = nums.length;
  if (nums[0] > 0 || nums[n - 1] < 0) return n;
  if (nums[0] === 0 && nums[n - 1] === 0) return 0;

  let left = 0;
  let right = n - 1;
  let pos = n;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > 0) {
      pos = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = n - 1;
  let neg = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < 0) {
      neg = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return Math.max(neg + 1, n - pos);
};

var nums = [-2, -1, -1, 1, 2, 3];
var expected = 3;
var result = maximumCount(nums);
console.log(result, result === expected);

var nums = [-3, -2, -1, 0, 0, 1, 2];
var expected = 3;
var result = maximumCount(nums);
console.log(result, result === expected);

var nums = [5, 20, 66, 1314];
var expected = 4;
var result = maximumCount(nums);
console.log(result, result === expected);
