// 1708. Largest Subarray Length K
// https://leetcode.com/problems/largest-subarray-length-k/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function (nums, k) {
  const n = nums.length;
  let max = nums[0];
  let startIndex = 0;
  for (let i = 1; i <= n - k; i++) {
    if (nums[i] > max) {
      max = nums[i];
      startIndex = i;
    }
  }
  return nums.slice(startIndex, startIndex + k);
};

var nums = [1, 4, 5, 2, 3],
  k = 3;
var expected = [5, 2, 3];
var result = largestSubarray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 4, 5, 2, 3],
  k = 4;
var expected = [4, 5, 2, 3];
var result = largestSubarray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 4, 5, 2, 3],
  k = 1;
var expected = [5];
var result = largestSubarray(nums, k);
console.log(result, result.join() === expected.join());
