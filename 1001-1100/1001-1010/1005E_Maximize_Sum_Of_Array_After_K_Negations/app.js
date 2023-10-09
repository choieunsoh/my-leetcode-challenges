// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let index = 0;
  let modifyIndex = 0;
  const n = nums.length;
  while (k-- > 0) {
    if (nums[index] < nums[modifyIndex]) {
      modifyIndex = index;
    }
    nums[modifyIndex] *= -1;
    if (index + 1 < n) index++;
  }

  return nums.reduce((sum, num) => sum + num, 0);
};

var nums = [4, 2, 3],
  k = 1;
var expected = 5;
var result = largestSumAfterKNegations(nums, k);
console.log(result, result === expected);

var nums = [3, -1, 0, 2],
  k = 3;
var expected = 6;
var result = largestSumAfterKNegations(nums, k);
console.log(result, result === expected);

var nums = [2, -3, -1, 5, -4],
  k = 2;
var expected = 13;
var result = largestSumAfterKNegations(nums, k);
console.log(result, result === expected);

var nums = [-4, -2, -3],
  k = 4;
var expected = 5;
var result = largestSumAfterKNegations(nums, k);
console.log(result, result === expected);
