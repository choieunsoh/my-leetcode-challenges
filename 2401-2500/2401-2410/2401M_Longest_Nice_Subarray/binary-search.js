// 2401. Longest Nice Subarray
// https://leetcode.com/problems/longest-nice-subarray/description/
// T.C.: O(n^2 log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  const n = nums.length;
  // Binary search for the longest nice subarray length
  let left = 0;
  let right = n;
  let result = 1; // Minimum answer is 1 (as subarrays of length 1 are always nice)
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canFormNiceSubarray(mid)) {
      result = mid; // Update the result
      left = mid + 1; // Try to find a longer subarray
    } else {
      right = mid - 1; // Try a shorter length
    }
  }
  return result;

  function canFormNiceSubarray(length) {
    if (length <= 1) return true; // Subarray of length 1 is always nice

    // Try each possible starting position for subarray of given length
    for (let start = 0; start <= nums.length - length; ++start) {
      let bitMask = 0; // Tracks the bits used in the current subarray
      let isNice = true;

      // Check if the subarray starting at 'start' with 'length' elements is nice
      for (let pos = start; pos < start + length; ++pos) {
        // If current number shares any bits with existing mask,
        // the subarray is not nice
        if ((bitMask & nums[pos]) != 0) {
          isNice = false;
          break;
        }
        bitMask |= nums[pos]; // Add current number's bits to the mask
      }

      if (isNice) return true; // Found a nice subarray of the specified length
    }
    return false; // No nice subarray of the given length exists
  }
};

var nums = [1, 3, 8, 48, 10];
var expected = 3;
var result = longestNiceSubarray(nums);
console.log(result, result === expected);

var nums = [3, 1, 5, 11, 13];
var expected = 1;
var result = longestNiceSubarray(nums);
console.log(result, result === expected);
