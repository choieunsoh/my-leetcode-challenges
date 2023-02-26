// 2574. Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const n = nums.length;
  const result = [];
  const total = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    const rightSum = total - leftSum - nums[i];
    result.push(Math.abs(rightSum - leftSum));
    leftSum += nums[i];
  }
  return result;
};

var nums = [10, 4, 8, 3];
var expected = [15, 1, 11, 22];
var result = leftRightDifference(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [0];
var result = leftRightDifference(nums);
console.log(result, result.join() === expected.join());
