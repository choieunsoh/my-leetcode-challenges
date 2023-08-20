// 2817. Minimum Absolute Difference Between Elements With Constraint
// https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  if (x == 0) return 0;
  const len = nums.length;
  const arr = [];
  let result = Infinity;
  for (let i = 0; i < len; i++) {
    if (i - x < 0) continue;

    if (nums.length == 0 || nums[i - x] >= arr.at(-1)) {
      arr.push(nums[i - x]);
    } else {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] >= nums[i - x]) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      arr.splice(left, 0, nums[i - x]);
    }

    left = 0;
    right = arr.length - 1;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (arr[mid] >= nums[i]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    result = Math.min(result, Math.abs(arr[left] - nums[i]));
    if (left > 0) {
      result = Math.min(result, Math.abs(arr[left - 1] - nums[i]));
    }
  }

  return result;
};

var nums = [4, 3, 2, 4],
  x = 2;
var expected = 0;
var result = minAbsoluteDifference(nums, x);
console.log(result, result === expected);

var nums = [5, 3, 2, 10, 15],
  x = 1;
var expected = 1;
var result = minAbsoluteDifference(nums, x);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  x = 3;
var expected = 3;
var result = minAbsoluteDifference(nums, x);
console.log(result, result === expected);
