// 3065. Minimum Operations to Exceed Threshold Value I
// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0;
  for (const num of nums) {
    if (num < k) count++;
  }
  return count;
};

var nums = [2, 11, 10, 1, 3],
  k = 10;
var expected = 3;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 2, 4, 9],
  k = 1;
var expected = 0;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 2, 4, 9],
  k = 9;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);
