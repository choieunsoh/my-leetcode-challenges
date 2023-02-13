// 2563. Count the Number of Fair Pairs
// https://leetcode.com/problems/count-the-number-of-fair-pairs/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  const n = nums.length;
  function lowerBound(left, right, lowerTarget) {
    let lb = right;
    while (left <= right) {
      const mid = (left + right) >> 1;
      // 1 2 5 7 9
      if (nums[mid] >= lowerTarget) {
        lb = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return lb;
  }
  function upperBound(left, right, upperTarget) {
    let ub = right;
    while (left <= right) {
      const mid = (left + right) >> 1;
      // 1 2 5 7 9
      if (nums[mid] > upperTarget) {
        ub = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ub;
  }

  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    const lb = lowerBound(i + 1, n, lower - nums[i]);
    const ub = upperBound(i + 1, n, upper - nums[i]);
    result += ub - lb;
  }
  return result;
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
