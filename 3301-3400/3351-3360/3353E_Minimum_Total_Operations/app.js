// 3353. Minimum Total Operations
// https://leetcode.com/problems/minimum-total-operations/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let prev = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      prev = nums[i];
      count++;
    }
  }
  return count;
};

var nums = [1, 4, 2];
var expected = 2;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [10, 10, 10];
var expected = 0;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 4, 2, 1];
var expected = 3;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [-8, 9, -8];
var expected = 2;
var result = minOperations(nums);
console.log(result, result === expected);
