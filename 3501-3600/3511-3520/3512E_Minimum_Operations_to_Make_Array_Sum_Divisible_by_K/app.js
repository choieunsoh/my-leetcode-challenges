// 3512. Minimum Operations to Make Array Sum Divisible by K
// https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  return sum % k;
};

var nums = [3, 9, 7],
  k = 5;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [4, 1, 3],
  k = 4;
var expected = 0;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 2],
  k = 6;
var expected = 5;
var result = minOperations(nums, k);
console.log(result, result === expected);
