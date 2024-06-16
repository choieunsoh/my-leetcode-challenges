// 330. Patching Array
// https://leetcode.com/problems/patching-array/description/
// T.C.: O(m + log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let result = 0;
  let i = 0;
  let missing = 1;
  while (missing <= n) {
    if (i < nums.length && nums[i] <= missing) {
      missing += nums[i++];
    } else {
      missing += missing;
      result++;
    }
  }
  return result;
};

var nums = [1, 3],
  n = 6;
var expected = 1;
var result = minPatches(nums, n);
console.log(result, result === expected);

var nums = [1, 5, 10],
  n = 20;
var expected = 2;
var result = minPatches(nums, n);
console.log(result, result === expected);

var nums = [1, 2, 2],
  n = 5;
var expected = 0;
var result = minPatches(nums, n);
console.log(result, result === expected);

var nums = [1, 2, 3, 8],
  n = 16;
var expected = 1;
var result = minPatches(nums, n);
console.log(result, result === expected);

var nums = [1, 2, 3, 8],
  n = 80;
var expected = 3;
var result = minPatches(nums, n);
console.log(result, result === expected);
