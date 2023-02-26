// 2574. Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const n = nums.length;
  const leftSum = Array(n).fill(0);
  const rightSum = Array(n).fill(0);
  for (let i = 0, j = n - 1; i < n - 1, j > 0; i++, j--) {
    leftSum[i + 1] = leftSum[i] + nums[i];
    rightSum[j - 1] = rightSum[j] + nums[j];
  }
  for (let i = 0; i < n; i++) {
    leftSum[i] = Math.abs(leftSum[i] - rightSum[i]);
  }
  return leftSum;
};

var nums = [10, 4, 8, 3];
var expected = [15, 1, 11, 22];
var result = leftRightDifference(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [0];
var result = leftRightDifference(nums);
console.log(result, result.join() === expected.join());
