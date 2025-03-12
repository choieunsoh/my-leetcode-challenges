// 2529. Maximum Count of Positive Integer and Negative Integer
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (const num of nums) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    }
  }

  return Math.max(positiveCount, negativeCount);
};

var nums = [-2, -1, -1, 1, 2, 3];
var expected = 3;
var result = maximumCount(nums);
console.log(result, result === expected);

var nums = [-3, -2, -1, 0, 0, 1, 2];
var expected = 3;
var result = maximumCount(nums);
console.log(result, result === expected);

var nums = [5, 20, 66, 1314];
var expected = 4;
var result = maximumCount(nums);
console.log(result, result === expected);
