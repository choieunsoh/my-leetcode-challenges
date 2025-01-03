// 2270. Number of Ways to Split Array
// https://leetcode.com/problems/number-of-ways-to-split-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const n = nums.length;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < n; i++) {
    rightSum += nums[i];
  }

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    rightSum -= nums[i];
    if (leftSum >= rightSum) count++;
  }
  return count;
};

var nums = [10, 4, -8, 7];
var expected = 2;
var result = waysToSplitArray(nums);
console.log(result, result === expected);

var nums = [2, 3, 1, 0];
var expected = 2;
var result = waysToSplitArray(nums);
console.log(result, result === expected);
