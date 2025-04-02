// 2873. Maximum Value of an Ordered Triplet I
// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let maxValue = 0;
  let iMax = 0;
  let diffMax = 0;
  for (const numK of nums) {
    maxValue = Math.max(maxValue, diffMax * numK);
    diffMax = Math.max(diffMax, iMax - numK);
    iMax = Math.max(iMax, numK);
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
