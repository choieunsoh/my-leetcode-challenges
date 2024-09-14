// 2419. Longest Subarray With Maximum Bitwise AND
// https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const maxNum = Math.max(...nums);
  let longest = 1;
  let startIndex = 0;
  for (let endIndex = 0; endIndex < nums.length; endIndex++) {
    if (nums[endIndex] === maxNum) {
      longest = Math.max(longest, endIndex - startIndex + 1);
    } else {
      startIndex = endIndex + 1;
    }
  }
  return longest;
};

var nums = [1, 2, 3, 3, 2, 2];
var expected = 2;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 1;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [3, 3, 3, 3];
var expected = 4;
var result = longestSubarray(nums);
console.log(result, result === expected);

var nums = [13, 13, 13, 3, 3, 3, 3, 15, 15, 15];
var expected = 3;
var result = longestSubarray(nums);
console.log(result, result === expected);
