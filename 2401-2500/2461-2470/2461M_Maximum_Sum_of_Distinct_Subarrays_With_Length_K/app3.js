// 2461. Maximum Sum of Distinct Subarrays With Length K
// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let result = 0;
  let currentSum = 0;
  let left = 0;
  let right = 0;
  const numToIndex = new Map();

  while (right < nums.length) {
    const currNum = nums[right];
    const lastOccurrence = numToIndex.get(currNum) ?? -1;

    // If current window already has the number or the window size is too big, adjust the window
    while (left <= lastOccurrence || right - left + 1 > k) {
      currentSum -= nums[left];
      left++;
    }

    numToIndex.set(currNum, right);
    currentSum += currNum;

    // Update the maximum sum if the window size is exactly `k`
    if (right - left + 1 === k) {
      result = Math.max(result, currentSum);
    }

    right++;
  }

  return result;
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
