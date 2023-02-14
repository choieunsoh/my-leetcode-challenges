// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function (nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

var nums = [1, 2, 3, 4];
var expected = [1, 3, 6, 10];
var result = runningSum(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1, 1, 1];
var expected = [1, 2, 3, 4, 5];
var result = runningSum(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 1, 2, 10, 1];
var expected = [3, 4, 6, 16, 17];
var result = runningSum(nums);
console.log(result, result.join() === expected.join());
