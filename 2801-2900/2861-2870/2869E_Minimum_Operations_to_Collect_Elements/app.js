// 2869. Minimum Operations to Collect Elements
// https://leetcode.com/problems/minimum-operations-to-collect-elements/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const marked = new Set();
  let operations = 0;
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    operations++;
    if (nums[i] <= k) marked.add(nums[i]);
    if (marked.size === k) break;
  }
  return operations;
};

var nums = [3, 1, 5, 4, 2],
  k = 2;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 1, 5, 4, 2],
  k = 5;
var expected = 5;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 5, 3, 1],
  k = 3;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 2],
  k = 2;
var expected = 3;
var result = minOperations(nums, k);
console.log(result, result === expected);
