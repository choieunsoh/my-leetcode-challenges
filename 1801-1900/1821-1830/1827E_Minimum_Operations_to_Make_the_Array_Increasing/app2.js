// 1827. Minimum Operations to Make the Array Increasing
// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ops = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const diff = Math.max(0, prev - nums[i] + 1);
    prev = nums[i] + diff;
    ops += diff;
  }
  return ops;
};

var nums = [1, 1, 1];
var expected = 3;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 5, 2, 4, 1];
var expected = 14;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [8];
var expected = 0;
var result = minOperations(nums);
console.log(result, result === expected);
