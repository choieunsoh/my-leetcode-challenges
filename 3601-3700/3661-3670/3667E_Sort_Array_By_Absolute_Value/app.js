// 3667. Sort Array By Absolute Value
// https://leetcode.com/problems/sort-array-by-absolute-value/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByAbsoluteValue = function (nums) {
  return nums.sort((a, b) => Math.abs(a) - Math.abs(b) || a - b);
};

var nums = [3, -1, -4, 1, 5];
var expected = [-1, 1, 3, -4, 5];
var result = sortByAbsoluteValue(nums);
console.log(result, result.join() === expected.join());

var nums = [-100, 100];
var expected = [-100, 100];
var result = sortByAbsoluteValue(nums);
console.log(result, result.join() === expected.join());
