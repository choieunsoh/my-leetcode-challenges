// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let maxLength = 0;

  // Find longest strictly increasing subarray
  for (let start = 0; start < nums.length; start++) {
    let currLength = 1;
    for (let pos = start + 1; pos < nums.length; pos++) {
      // Extend subarray if next element is larger
      if (nums[pos] > nums[pos - 1]) {
        currLength++;
      } else {
        // Break if sequence is not increasing anymore
        break;
      }
    }
    maxLength = Math.max(maxLength, currLength);
  }

  // Find longest strictly decreasing subarray
  for (let start = 0; start < nums.length; start++) {
    let currLength = 1;
    for (let pos = start + 1; pos < nums.length; pos++) {
      // Extend subarray if next element is smaller
      if (nums[pos] < nums[pos - 1]) {
        currLength++;
      } else {
        // Break if sequence is not decreasing anymore
        break;
      }
    }
    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength; // Return the longer of increasing or decreasing sequences
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
