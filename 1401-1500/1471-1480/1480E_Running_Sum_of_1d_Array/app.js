// https://leetcode.com/problems/running-sum-of-1d-array/
// 1480. Running Sum of 1d Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (nums.length === 0) return [];
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
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
