// 2357. Make Array Zero by Subtracting Equal Amounts
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const set = new Set(nums);
  const hasZero = set.has(0);
  return set.size - (set.has(0) ? 1 : 0);
};

var nums = [1, 5, 0, 3, 5];
var expected = 3;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [0];
var expected = 0;
var result = minimumOperations(nums);
console.log(result, result === expected);
