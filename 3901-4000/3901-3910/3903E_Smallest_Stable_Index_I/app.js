// 3903. Smallest Stable Index I
// https://leetcode.com/problems/smallest-stable-index-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  const minAtIdx = new Array(n);

  let minVal = Infinity;
  let maxVal = -Infinity;

  // Build suffix minimum array
  for (let i = n - 1; i >= 0; i--) {
    minVal = Math.min(minVal, nums[i]);
    minAtIdx[i] = minVal;
  }

  // Find first stable index
  for (let i = 0; i < n; i++) {
    maxVal = Math.max(maxVal, nums[i]);

    if (maxVal - minAtIdx[i] <= k) {
      return i;
    }
  }

  return -1;
};

var nums = [5, 0, 1, 4],
  k = 3;
var expected = 3;
var result = firstStableIndex(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 1],
  k = 1;
var expected = -1;
var result = firstStableIndex(nums, k);
console.log(result, result === expected);

var nums = [0],
  k = 0;
var expected = 0;
var result = firstStableIndex(nums, k);
console.log(result, result === expected);
