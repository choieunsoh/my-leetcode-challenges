// 163. Missing Ranges
// https://leetcode.com/problems/missing-ranges/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  const n = nums.length;
  if (n === 0) return [[lower, upper]];

  const result = [];
  if (lower < nums[0]) {
    result.push([lower, nums[0] - 1]);
  }

  for (let i = 0; i < n - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) continue;
    result.push([nums[i] + 1, nums[i + 1] - 1]);
  }

  if (upper > nums[n - 1]) {
    result.push([nums[n - 1] + 1, upper]);
  }

  return result;
};

var nums = [0, 1, 3, 50, 75],
  lower = 0,
  upper = 99;
var expected = [
  [2, 2],
  [4, 49],
  [51, 74],
  [76, 99],
];
var result = findMissingRanges(nums, lower, upper);
console.log(result, result.join() === expected.join());

var nums = [-1],
  lower = -1,
  upper = -1;
var expected = [];
var result = findMissingRanges(nums, lower, upper);
console.log(result, result.join() === expected.join());

var nums = [],
  lower = 1,
  upper = 1;
var expected = [[1, 1]];
var result = findMissingRanges(nums, lower, upper);
console.log(result, result.join() === expected.join());

var nums = [],
  lower = -3,
  upper = -1;
var expected = [[-3, -1]];
var result = findMissingRanges(nums, lower, upper);
console.log(result, result.join() === expected.join());

var nums = [-1],
  lower = -2,
  upper = -1;
var expected = [[-2, -2]];
var result = findMissingRanges(nums, lower, upper);
console.log(result, result.join() === expected.join());
