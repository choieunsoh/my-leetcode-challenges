// this.https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray
var maxSubArray = function (nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = max;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var expected = 6;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [1];
var expected = 1;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [5, 4, -1, 7, 8];
var expected = 23;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var expected = 6;
var result = maxSubArray(nums);
console.log(result, expected, result === expected);
