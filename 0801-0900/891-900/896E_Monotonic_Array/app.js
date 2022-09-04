// https://leetcode.com/problems/monotonic-array/
// 896. Monotonic Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increase = true;
  let decrease = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) increase = false;
    if (nums[i - 1] < nums[i]) decrease = false;
    if (!increase && !decrease) return false;
  }
  return increase || decrease;
};

var nums = [1, 2, 2, 3];
var expected = true;
var result = isMonotonic(nums);
console.log(result, result === expected);

var nums = [6, 5, 4, 4];
var expected = true;
var result = isMonotonic(nums);
console.log(result, result === expected);

var nums = [1, 3, 2];
var expected = false;
var result = isMonotonic(nums);
console.log(result, result === expected);
