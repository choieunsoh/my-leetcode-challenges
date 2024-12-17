// 3264. Final Array State After K Multiplication Operations I
// https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/
// T.C.: O(n * k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const n = nums.length;
  for (let j = 0; j < k; j++) {
    let minIndex = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }
    nums[minIndex] *= multiplier;
  }
  return nums;
};

var nums = [2, 1, 3, 5, 6],
  k = 5,
  multiplier = 2;
var expected = [8, 4, 6, 5, 6];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());

var nums = [1, 2],
  k = 3,
  multiplier = 4;
var expected = [16, 8];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());

var nums = [2, 2],
  k = 1,
  multiplier = 5;
var expected = [10, 2];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());
