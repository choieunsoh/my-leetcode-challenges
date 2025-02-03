// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let longest = 1;
  let increaseCount = 1;
  let decreaseCount = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      increaseCount++;
      decreaseCount = 1;
    } else if (nums[i] > nums[i + 1]) {
      decreaseCount++;
      increaseCount = 1;
    } else {
      increaseCount = 1;
      decreaseCount = 1;
    }
    longest = Math.max(longest, increaseCount, decreaseCount);
  }
  return longest;
};

var nums = [1, 4, 3, 3, 2];
var expected = 2;
var result = longestMonotonicSubarray(nums);
console.log(result, result === expected);

var nums = [3, 3, 3, 3];
var expected = 1;
var result = longestMonotonicSubarray(nums);
console.log(result, result === expected);

var nums = [3, 2, 1];
var expected = 3;
var result = longestMonotonicSubarray(nums);
console.log(result, result === expected);

var nums = [1, 10, 10];
var expected = 2;
var result = longestMonotonicSubarray(nums);
console.log(result, result === expected);
