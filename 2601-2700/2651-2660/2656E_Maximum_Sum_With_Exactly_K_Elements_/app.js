// 2656. Maximum Sum With Exactly K Elements
// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const max = Math.max(...nums);
  const total = ((k + 1) * k) / 2;
  return k * (max - 1) + total;
};

var nums = [1, 2, 3, 4, 5],
  k = 3;
var expected = 18;
var result = maximizeSum(nums, k);
console.log(result, result === expected);

var nums = [5, 5, 5],
  k = 2;
var expected = 11;
var result = maximizeSum(nums, k);
console.log(result, result === expected);
