// 3350. Adjacent Increasing Subarrays Detection II
// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
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
  return result;
};

var nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
var expected = 3;
var result = maxIncreasingSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
var expected = 2;
var result = maxIncreasingSubarrays(nums);
console.log(result, result === expected);
