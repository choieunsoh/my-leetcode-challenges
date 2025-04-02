// 2873. Maximum Value of an Ordered Triplet I
// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  let maxValue = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const value = (nums[i] - nums[j]) * nums[k];
        maxValue = Math.max(maxValue, value);
      }
    }
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
