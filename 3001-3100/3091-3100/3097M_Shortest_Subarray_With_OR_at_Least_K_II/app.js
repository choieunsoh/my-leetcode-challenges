// 3097. Shortest Subarray With OR at Least K II
// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let length = Number.MAX_SAFE_INTEGER;
  let start = 0;
  const bitCounts = new Array(32).fill(0);
  for (let end = 0; end < nums.length; end++) {
    updateBitCounts(bitCounts, nums[end], 1);
    while (start <= end && toNumber(bitCounts) >= k) {
      length = Math.min(length, end - start + 1);
      updateBitCounts(bitCounts, nums[start], -1);
      start++;
    }
  }
  return length === Number.MAX_SAFE_INTEGER ? -1 : length;

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
