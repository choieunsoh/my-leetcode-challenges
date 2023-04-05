// 2439. Minimize Maximum of Array
// https://leetcode.com/problems/minimize-maximum-of-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(result, Math.ceil(sum / (i + 1)));
  }
  return result;
};

var nums = [3, 7, 1, 6];
var expected = 5;
var result = minimizeArrayValue(nums);
console.log(result, result === expected);

var nums = [10, 1];
var expected = 10;
var result = minimizeArrayValue(nums);
console.log(result, result === expected);
