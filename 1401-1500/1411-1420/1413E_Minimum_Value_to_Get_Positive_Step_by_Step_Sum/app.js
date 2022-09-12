// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
// 1413. Minimum Value to Get Positive Step by Step Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < min) min = sum;
  }
  return min > 0 ? 1 : 1 - min;
};

var nums = [-3, 2, -3, 4, 2];
var expected = 5;
var result = minStartValue(nums);
console.log(result, expected, result === expected);

var nums = [1, 2];
var expected = 1;
var result = minStartValue(nums);
console.log(result, expected, result === expected);

var nums = [1, -2, -3];
var expected = 5;
var result = minStartValue(nums);
console.log(result, expected, result === expected);

var nums = [2, 3, 5, -5, -1];
var expected = 1;
var result = minStartValue(nums);
console.log(result, expected, result === expected);
