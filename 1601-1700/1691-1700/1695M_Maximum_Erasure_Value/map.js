// 1695. Maximum Erasure Value
// https://leetcode.com/problems/maximum-erasure-value/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const freq = new Map();
  const n = nums.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxSum = 0;
  while (right < n) {
    freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);

    while (left < n && freq.get(nums[right]) > 1) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      if (freq.get(nums[left]) === 0) {
        freq.delete(nums[left]);
      }
      sum -= nums[left++];
    }

    sum += nums[right++];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

var nums = [4, 2, 4, 5, 6];
var expected = 17;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);

var nums = [5, 2, 1, 2, 5, 2, 1, 2, 5];
var expected = 8;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);
