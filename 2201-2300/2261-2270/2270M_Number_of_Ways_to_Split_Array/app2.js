// 2270. Number of Ways to Split Array
// https://leetcode.com/problems/number-of-ways-to-split-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
    totalSum += nums[i];
  }

  let count = 0;
  for (let i = 1; i < n; i++) {
    if (prefixSum[i] >= totalSum - prefixSum[i]) count++;
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
