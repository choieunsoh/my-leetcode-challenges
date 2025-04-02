// 2873. Maximum Value of an Ordered Triplet I
// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
    rightMax[n - 1 - i] = Math.max(rightMax[n - i], nums[n - i]);
  }

  let maxValue = 0;
  for (let j = 1; j < n - 1; j++) {
    maxValue = Math.max(maxValue, (leftMax[j] - nums[j]) * rightMax[j]);
  }
  return maxValue;
};

var nums = [12, 6, 1, 2, 7];
var expected = 77;
var result = maximumTripletValue(nums);
console.log(result, result === expected);

var nums = [1, 10, 3, 4, 19];
var expected = 133;
var result = maximumTripletValue(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 0;
var result = maximumTripletValue(nums);
console.log(result, result === expected);

var nums = [10, 13, 6, 2];
var expected = 14;
var result = maximumTripletValue(nums);
console.log(result, result === expected);
