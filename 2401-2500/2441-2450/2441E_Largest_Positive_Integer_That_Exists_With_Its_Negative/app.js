// 2441. Largest Positive Integer That Exists With Its Negative
// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let result = -1;
  const seen = new Set();
  for (const num of nums) {
    const target = -1 * num;
    if (seen.has(target)) {
      result = Math.max(result, Math.abs(num));
    }
    seen.add(num);
  }
  return result;
};

var nums = [-1, 2, -3, 3];
var expected = 3;
var result = findMaxK(nums);
console.log(result, result === expected);

var nums = [-1, 10, 6, 7, -7, 1];
var expected = 7;
var result = findMaxK(nums);
console.log(result, result === expected);

var nums = [-10, 8, 6, 7, -2, -3];
var expected = -1;
var result = findMaxK(nums);
console.log(result, result === expected);

var nums = [-9, -43, 24, -23, -16, -30, -38, -30];
var expected = -1;
var result = findMaxK(nums);
console.log(result, result === expected);
