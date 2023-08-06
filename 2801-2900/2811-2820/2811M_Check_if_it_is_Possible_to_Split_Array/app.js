// 2811. Check if it is Possible to Split Array
// https://leetcode.com/problems/check-if-it-is-possible-to-split-array/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
  const n = nums.length;
  if (n < 3) return true;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] + nums[i + 1] >= m) return true;
  }
  return false;
};

var nums = [4, 1, 3, 2, 4],
  m = 6;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [1, 1],
  m = 3;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 2, 1],
  m = 4;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 1, 3],
  m = 5;
var expected = false;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 3, 3, 2, 3],
  m = 6;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 3, 3, 2, 3],
  m = 8;
var expected = false;
var result = canSplitArray(nums, m);
console.log(result, result === expected);
