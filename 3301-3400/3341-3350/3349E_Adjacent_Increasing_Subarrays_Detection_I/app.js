// 3349. Adjacent Increasing Subarrays Detection I
// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  const n = nums.length;
  let up = 1;
  let prevUp = 0;
  let result = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up++;
    } else {
      prevUp = up;
      up = 1;
    }
    result = Math.max(result, up >> 1, Math.min(prevUp, up));
  }
  return result >= k;
};

var nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1],
  k = 3;
var expected = true;
var result = hasIncreasingSubarrays(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7],
  k = 5;
var expected = false;
var result = hasIncreasingSubarrays(nums, k);
console.log(result, result === expected);
