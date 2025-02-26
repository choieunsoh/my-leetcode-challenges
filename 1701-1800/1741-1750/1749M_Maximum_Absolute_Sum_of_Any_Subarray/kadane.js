// 1749. Maximum Absolute Sum of Any Subarray
// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/
// Kadane's algorithm
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let currentPositiveSum = 0;
  let maxPositiveSum = 0;
  let currentNegativeSum = 0;
  let maxNegativeSum = 0;
  for (const num of nums) {
    currentPositiveSum = Math.max(currentPositiveSum + num, num);
    maxPositiveSum = Math.max(maxPositiveSum, currentPositiveSum);

    currentNegativeSum = Math.min(currentNegativeSum + num, num);
    maxNegativeSum = Math.min(maxNegativeSum, currentNegativeSum);
  }
  return Math.max(maxPositiveSum, -maxNegativeSum);
};

var nums = [1, -3, 2, 3, -4];
var expected = 5;
var result = maxAbsoluteSum(nums);
console.log(result, result === expected);

var nums = [2, -5, 1, -4, 3, -2];
var expected = 8;
var result = maxAbsoluteSum(nums);
console.log(result, result === expected);
