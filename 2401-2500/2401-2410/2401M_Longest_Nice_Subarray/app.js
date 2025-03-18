// 2401. Longest Nice Subarray
// https://leetcode.com/problems/longest-nice-subarray/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  const n = nums.length;
  let result = 0;
  let mask = 0;
  for (let left = 0, right = 0; right < n; right++) {
    while (mask & nums[right]) {
      mask ^= nums[left++];
    }
    mask |= nums[right];
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var nums = [1, 3, 8, 48, 10];
var expected = 3;
var result = longestNiceSubarray(nums);
console.log(result, result === expected);

var nums = [3, 1, 5, 11, 13];
var expected = 1;
var result = longestNiceSubarray(nums);
console.log(result, result === expected);
