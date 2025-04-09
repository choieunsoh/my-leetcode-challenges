// 3375. Minimum Operations to Make Array Values Equal to K
// https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const greaterNums = new Set();
  for (const num of nums) {
    if (num < k) {
      return -1;
    }
    if (num > k) {
      greaterNums.add(num);
    }
  }
  return greaterNums.size;
};

var nums = [5, 2, 5, 4, 5],
  k = 2;
var expected = 2;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 2],
  k = 2;
var expected = -1;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [9, 7, 5, 3],
  k = 1;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);
