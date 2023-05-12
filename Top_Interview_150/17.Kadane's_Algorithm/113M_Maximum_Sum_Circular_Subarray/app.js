// 918. Maximum Sum Circular Subarray
// https://leetcode.com/problems/maximum-sum-circular-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxSoFar = Number.MIN_SAFE_INTEGER;
  let maxEndingHere = 0;
  let minSoFar = Number.MAX_SAFE_INTEGER;
  let minEndingHere = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;

    maxEndingHere = Math.max(maxEndingHere + num, num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);

    minEndingHere = Math.min(minEndingHere + num, num);
    minSoFar = Math.min(minSoFar, minEndingHere);
  }

  if (sum === minSoFar) return maxSoFar;
  return Math.max(sum - minSoFar, maxSoFar);
};

var nums = [1, -2, 3, -2];
var expected = 3;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);

var nums = [5, -3, 5];
var expected = 10;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);

var nums = [-3, -2, -3];
var expected = -2;
var result = maxSubarraySumCircular(nums);
console.log(result, result === expected);
