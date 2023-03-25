// 1567. Maximum Length of Subarray With Positive Product
// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let longestSoFar = 0;
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      const prevPositiveCount = positiveCount;
      positiveCount = negativeCount > 0 ? negativeCount + 1 : 0;
      negativeCount = prevPositiveCount + 1;
    } else if (num > 0) {
      if (negativeCount > 0) {
        negativeCount++;
      }
      positiveCount++;
    } else {
      positiveCount = 0;
      negativeCount = 0;
    }
    longestSoFar = Math.max(positiveCount, longestSoFar);
  }
  return longestSoFar;
};

var nums = [1, -2, -3, 4];
var expected = 4;
var result = getMaxLen(nums);
console.log(result, result == expected);

var nums = [0, 1, -2, -3, -4];
var expected = 3;
var result = getMaxLen(nums);
console.log(result, result == expected);

var nums = [-1, -2, -3, 0, 1];
var expected = 2;
var result = getMaxLen(nums);
console.log(result, result == expected);
