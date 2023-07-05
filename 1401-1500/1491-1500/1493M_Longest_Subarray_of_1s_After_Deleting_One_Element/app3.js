// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let zeroCount = 0;
  let result = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    zeroCount += nums[right] ^ 1;
    while (zeroCount > 1) {
      zeroCount -= nums[left++] ^ 1;
    }
    result = Math.max(result, right - left);
  }

  return result;
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
