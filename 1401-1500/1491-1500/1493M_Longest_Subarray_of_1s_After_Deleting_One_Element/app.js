// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const n = nums.length;
  const zeros = nums.filter((num) => num === 0).length;
  if (zeros < 2) return n - 1;

  let result = 0;
  let zeroIndex = -1;
  let oneIndex = -1;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const next = nums[i + 1];
    if (num === 0) {
      zeroIndex = i;
    } else if (num === 1 && oneIndex === -1) {
      oneIndex = i;
    }

    if (!next && zeroIndex > -1 && oneIndex > -1) {
      if (zeroIndex < oneIndex) {
        result = Math.max(result, i - oneIndex + 1);
      } else {
        result = Math.max(result, i - oneIndex);
        oneIndex = zeroIndex + 1;
      }
    }
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
