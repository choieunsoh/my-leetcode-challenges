// 2016. Maximum Difference Between Increasing Elements
// https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let maxDiff = -1;
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else {
      maxDiff = Math.max(maxDiff, nums[i] - min);
    }
  }
  return maxDiff;
};

var nums = [7, 1, 5, 4];
var expected = 4;
var result = maximumDifference(nums);
console.log(result, result === expected);

var nums = [9, 4, 3, 2];
var expected = -1;
var result = maximumDifference(nums);
console.log(result, result === expected);

var nums = [1, 5, 2, 10];
var expected = 9;
var result = maximumDifference(nums);
console.log(result, result === expected);

var nums = [11, 11, 11, 11];
var expected = -1;
var result = maximumDifference(nums);
console.log(result, result === expected);
