// 2563. Count the Number of Fair Pairs
// https://leetcode.com/problems/count-the-number-of-fair-pairs/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  const n = nums.length;
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    const lb = lowerBound(i + 1, n - 1, lower - nums[i]);
    const ub = upperBound(i + 1, n - 1, upper - nums[i]);
    result += ub - lb;
  }
  return result;

  function lowerBound(left, right, target) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      // 0 1 4 4 5 7
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  function upperBound(left, right, target) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      // 0 1 4 4 5 7
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
};

var nums = [0, 1, 7, 4, 4, 5],
  lower = 3,
  upper = 6;
var expected = 6;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);

var nums = [1, 7, 9, 2, 5],
  lower = 11,
  upper = 11;
var expected = 1;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0],
  lower = 0,
  upper = 0,
  expected = 15;
var result = countFairPairs(nums, lower, upper);
console.log(result, result === expected);
