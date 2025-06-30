// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
// T.C.: O(2^n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;
  for (let i = 0; i < 1 << nums.length; i++) {
    let count = 0;
    let min = Number.MAX_SAFE_VALUE;
    let max = Number.MIN_SAFE_VALUE;
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) != 0) {
        min = Math.min(min, nums[j]);
        max = Math.max(max, nums[j]);
        count++;
      }
    }
    if (max - min === 1) {
      result = Math.max(result, count);
    }
  }
  return result;
};

var nums = [1, 3, 2, 2, 5, 2, 3, 7];
var expected = 5;
var result = findLHS(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 2;
var result = findLHS(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1];
var expected = 0;
var result = findLHS(nums);
console.log(result, result === expected);
