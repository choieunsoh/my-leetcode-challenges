// 3097. Shortest Subarray With OR at Least K II
// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let left = 1;
  let right = nums.length;
  let minLength = -1;

  // Binary search on the length of subarray
  while (left <= right) {
    const mid = (right + left) >> 1;

    if (hasValidSubarray(nums, k, mid)) {
      minLength = mid;
      right = mid - 1; // Try to find smaller length
    } else {
      left = mid + 1; // Try larger length
    }
  }

  return minLength;

  function hasValidSubarray(nums, targetSum, windowSize) {
    const arrayLength = nums.length;
    const bitCounts = new Array(32).fill(0); // Tracks count of set bits at each position

    // Sliding window approach
    for (let right = 0; right < arrayLength; right++) {
      // Add current number to window
      updateBitCounts(bitCounts, nums[right], 1);

      // Remove leftmost number if window exceeds size
      if (right >= windowSize) {
        updateBitCounts(bitCounts, nums[right - windowSize], -1);
      }

      // Check if current window is valid
      if (right >= windowSize - 1 && toNumber(bitCounts) >= targetSum) {
        return true;
      }
    }
    return false;
  }

  function updateBitCounts(bitCounts, num, delta) {
    for (let i = 0; i < 32; i++) {
      if (num & (1 << i)) {
        bitCounts[i] += delta;
      }
    }
  }

  function toNumber(bitCounts) {
    let num = 0;
    for (let i = 0; i < 32; i++) {
      if (bitCounts[i] > 0) {
        num |= 1 << i;
      }
    }
    return num;
  }
};

var nums = [1, 2, 3],
  k = 2;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 8],
  k = 10;
var expected = 3;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 2],
  k = 0;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);
