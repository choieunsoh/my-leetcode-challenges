// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// 674. Longest Continuous Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    nums[i] > nums[i - 1] ? count++ : (count = 1);
    if (count > max) max = count;
  }
  return max;
};

var nums = [1, 3, 5, 4, 7];
var expected = 3;
var result = findLengthOfLCIS(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 2];
var expected = 1;
var result = findLengthOfLCIS(nums);
console.log(result, result === expected);
