// 2461. Maximum Sum of Distinct Subarrays With Length K
// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const n = nums.length;
  const seen = new Set();
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxSum = 0;
  while (right < n) {
    while (seen.has(nums[right]) || right - left + 1 > k) {
      seen.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    seen.add(nums[right]);
    sum += nums[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, sum);
    }
    right++;
  }
  return maxSum;
};

var nums = [1, 5, 4, 2, 9, 9, 9],
  k = 3;
var expected = 15;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [4, 4, 4],
  k = 3;
var expected = 0;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [9, 18, 10, 13, 17, 9, 19, 2, 1, 18],
  k = 5;
var expected = 68;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);
