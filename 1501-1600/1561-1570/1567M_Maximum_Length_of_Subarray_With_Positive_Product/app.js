// 1567. Maximum Length of Subarray With Positive Product
// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let latestZeroIndex = -1;
  let firstNegativeIndex = -1;
  let negativeCount = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      negativeCount++;
      if (firstNegativeIndex === -1) firstNegativeIndex = i;
    }
    if (num === 0) {
      latestZeroIndex = i;
      firstNegativeIndex = -1;
      negativeCount = 0;
    } else {
      if (negativeCount & 1) {
        result = Math.max(result, i - firstNegativeIndex);
      } else {
        result = Math.max(result, i - latestZeroIndex);
      }
    }
  }
  return result;
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
