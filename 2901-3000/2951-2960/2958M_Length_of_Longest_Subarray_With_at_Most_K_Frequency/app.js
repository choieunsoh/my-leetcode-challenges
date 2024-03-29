// 2958. Length of Longest Subarray With at Most K Frequency
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const freq = new Map();
  let result = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    const rightNum = nums[right];
    freq.set(rightNum, (freq.get(rightNum) ?? 0) + 1);
    while (freq.get(rightNum) > k) {
      const leftNum = nums[left++];
      freq.set(leftNum, (freq.get(leftNum) ?? 0) - 1);
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var nums = [1, 2, 3, 1, 2, 3, 1, 2],
  k = 2;
var expected = 6;
var result = maxSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 2, 1, 2],
  k = 1;
var expected = 2;
var result = maxSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [5, 5, 5, 5, 5, 5, 5],
  k = 4;
var expected = 4;
var result = maxSubarrayLength(nums, k);
console.log(result, result === expected);
