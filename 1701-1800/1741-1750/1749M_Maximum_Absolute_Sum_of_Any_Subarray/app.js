// 1749. Maximum Absolute Sum of Any Subarray
// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let prefixSum = 0;
  let minPrefixSum = 0;
  let maxPrefixSum = 0;
  for (const num of nums) {
    prefixSum += num;
    minPrefixSum = Math.min(minPrefixSum, prefixSum);
    maxPrefixSum = Math.max(maxPrefixSum, prefixSum);
  }
  return maxPrefixSum - minPrefixSum;
};

var nums = [1, -3, 2, 3, -4];
var expected = 5;
var result = maxAbsoluteSum(nums);
console.log(result, result === expected);

var nums = [2, -5, 1, -4, 3, -2];
var expected = 8;
var result = maxAbsoluteSum(nums);
console.log(result, result === expected);
