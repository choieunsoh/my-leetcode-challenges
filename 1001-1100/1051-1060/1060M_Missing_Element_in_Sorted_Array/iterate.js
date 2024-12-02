// 1060. Missing Element in Sorted Array
// https://leetcode.com/problems/missing-element-in-sorted-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const diff = nums[i] - nums[i - 1] - 1;
    if (diff >= k) {
      return nums[i - 1] + k;
    }
    k -= diff;
  }
  return nums[n - 1] + k;
};

var nums = [4, 7, 9, 10],
  k = 1;
var expected = 5;
var result = missingElement(nums, k);
console.log(result, result === expected);

var nums = [4, 7, 9, 10],
  k = 3;
var expected = 8;
var result = missingElement(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 4],
  k = 3;
var expected = 6;
var result = missingElement(nums, k);
console.log(result, result === expected);
