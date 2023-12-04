// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let left = -1;
  let min = nums[0];
  let max = nums[0];
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    min = Math.min(min, num);
    max = Math.max(max, num);
    queue.push(num);
    if (max - min <= limit) continue;

    left++;
    const removed = queue.shift();
    if (removed === min) {
      min = Math.min(...queue);
    }
    if (removed === max) {
      max = Math.max(...queue);
    }
  }
  return nums.length - left - 1;
};

var nums = [8, 2, 4, 7],
  limit = 4;
var expected = 2;
var result = longestSubarray(nums, limit);
console.log(result, result === expected);

var nums = [10, 1, 2, 4, 7, 2],
  limit = 5;
var expected = 4;
var result = longestSubarray(nums, limit);
console.log(result, result === expected);

var nums = [4, 2, 2, 2, 4, 4, 2, 2],
  limit = 0;
var expected = 3;
var result = longestSubarray(nums, limit);
console.log(result, result === expected);

var nums = [1, 5, 6, 7, 8, 10, 6, 5, 6],
  limit = 4;
var expected = 5;
var result = longestSubarray(nums, limit);
console.log(result, result === expected);
