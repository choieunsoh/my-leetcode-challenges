// 3903. Smallest Stable Index I
// https://leetcode.com/problems/smallest-stable-index-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let maxValue = nums[i];
    let minValue = nums[i];
    for (let j = 0; j < i; j++) {
      maxValue = Math.max(maxValue, nums[j]);
    }
    for (let j = i + 1; j < n; j++) {
      minValue = Math.min(minValue, nums[j]);
    }
    if (maxValue - minValue <= k) {
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
