// 3674. Minimum Operations to Equalize Array
// https://leetcode.com/problems/minimum-operations-to-equalize-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) return 1;
  }
  return 0;
};

var nums = [1, 2];
var expected = 1;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [5, 5, 5];
var expected = 0;
var result = minOperations(nums);
console.log(result, result === expected);
