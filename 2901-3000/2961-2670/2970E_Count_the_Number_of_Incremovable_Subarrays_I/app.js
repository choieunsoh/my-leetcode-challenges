// 2970. Count the Number of Incremovable Subarrays I
// https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/description/
// T.C.: O(n ^ 3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  let result = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isIncrease(i, j)) result++;
    }
  }
  return result;

  function isIncrease(left, right) {
    for (let i = 1; i < left; i++) {
      if (nums[i] <= nums[i - 1]) return false;
    }
    if (left - 1 >= 0 && right + 1 < n && nums[left - 1] >= nums[right + 1]) return false;
    for (let i = right + 2; i < n; i++) {
      if (nums[i] <= nums[i - 1]) return false;
    }
    return true;
  }
};

var nums = [1, 2, 3, 4];
var expected = 10;
var result = incremovableSubarrayCount(nums);
console.log(result, result === expected);

var nums = [6, 5, 7, 8];
var expected = 7;
var result = incremovableSubarrayCount(nums);
console.log(result, result === expected);

var nums = [8, 7, 6, 6];
var expected = 3;
var result = incremovableSubarrayCount(nums);
console.log(result, result === expected);
