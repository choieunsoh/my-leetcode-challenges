// 1403. Minimum Subsequence in Non-Increasing Order
// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let rightSum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    rightSum -= num;
    leftSum += num;
    if (leftSum > rightSum) {
      return nums.slice(0, i + 1);
    }
  }
  return [];
};

var nums = [4, 3, 10, 9, 8];
var expected = [10, 9];
var result = minSubsequence(nums);
console.log(result, result.join() === expected.join());

var nums = [4, 4, 7, 6, 7];
var expected = [7, 7, 6];
var result = minSubsequence(nums);
console.log(result, result.join() === expected.join());
