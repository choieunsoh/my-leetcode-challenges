// 1695. Maximum Erasure Value
// https://leetcode.com/problems/maximum-erasure-value/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const seen = new Array(10001);
  const n = nums.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxSum = 0;
  while (right < n) {
    while (left < n && seen[nums[right]] === true) {
      seen[nums[left]] = false;
      sum -= nums[left++];
    }

    seen[nums[right]] = true;
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
