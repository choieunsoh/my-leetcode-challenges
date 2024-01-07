// 446. Arithmetic Slices II - Subsequence
// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let result = 0;
  const n = nums.length;
  const counts = Array.from({ length: n }, () => new Map());
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const endingAtJ = counts[j].get(diff) ?? 0;
      const endingAtI = counts[i].get(diff) ?? 0;
      counts[i].set(diff, endingAtJ + endingAtI + 1);
      result += endingAtJ;
    }
  }
  return result;
};

var nums = [2, 4, 6, 8, 10];
var expected = 7;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [7, 7, 7, 7, 7];
var expected = 16;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);
