// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let deleted = 0;
  let right = 0;
  let left = 0;
  let result = 0;

  const n = nums.length;
  while (right < n) {
    if (nums[right] === 1 || deleted === 0) {
      if (nums[right] === 0) deleted = 1;
      result = Math.max(result, right - left - deleted + 1);
      right++;
    } else {
      if (nums[left] === 0) deleted = 0;
      left++;
    }
  }

  return result === n ? n - 1 : result;
};

var nums = [1, 1, 0, 1];
var expected = 3;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
var expected = 5;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0];
var expected = 6;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 2;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 0, 1, 1, 1, 0, 1];
var expected = 4;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [0, 0, 0];
var expected = 0;
var result = longestSubarray(nums);
console.log(result, result === expected);
