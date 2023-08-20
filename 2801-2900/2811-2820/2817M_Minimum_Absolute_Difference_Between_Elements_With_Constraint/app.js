// 2817. Minimum Absolute Difference Between Elements With Constraint
// https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  const sortedNums = [];
  const n = nums.length;
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = x; i < n; i++) {
    const num = nums[i];
    binaryInsert(sortedNums, nums[i - x]);
    const pos = insertPosition(sortedNums, num);

    if (pos < sortedNums.length) {
      result = Math.min(result, Math.abs(num - sortedNums[pos]));
    }
    if (pos > 0) {
      result = Math.min(result, Math.abs(num - sortedNums[pos - 1]));
    }
  }
  return result;

  function insertPosition(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr[mid] === target) return mid;
      if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  function binaryInsert(arr, num) {
    const pos = insertPosition(arr, num);
    arr.splice(pos, 0, num);
    return arr;
  }
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
