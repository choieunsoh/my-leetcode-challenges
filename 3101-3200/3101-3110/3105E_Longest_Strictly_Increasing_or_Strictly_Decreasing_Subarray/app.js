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
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    if (nums[i] === nums[j]) continue;
    const diff = nums[i] < nums[j] ? 1 : -1;
    while (j < n && nums[j] * diff > nums[j - 1] * diff) {
      j++;
    }
    longest = Math.max(longest, j - i);
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
