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
  let left = 0;
  let right = 0;
  const n = nums.length;
  const minQueue = [];
  const maxQueue = [];
  while (right < n) {
    const num = nums[right++];
    while (minQueue.length && num < minQueue[minQueue.length - 1]) {
      minQueue.pop();
    }
    while (maxQueue.length && num > maxQueue[maxQueue.length - 1]) {
      maxQueue.pop();
    }
    minQueue.push(num);
    maxQueue.push(num);

    const min = minQueue[0];
    const max = maxQueue[0];
    if (max - min > limit) {
      if (min === nums[left]) minQueue.shift();
      if (max === nums[left]) maxQueue.shift();
      left++;
    }
  }

  return right - left;
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
