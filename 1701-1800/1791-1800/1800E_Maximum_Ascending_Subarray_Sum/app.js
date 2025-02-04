// 1800. Maximum Ascending Subarray Sum
// https://leetcode.com/problems/maximum-ascending-subarray-sum/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let sum = nums[0];
  let maxSum = sum;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

var nums = [10, 20, 30, 5, 10, 50];
var expected = 65;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [10, 20, 30, 40, 50];
var expected = 150;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [12, 17, 15, 13, 10, 11, 12];
var expected = 33;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [2];
var expected = 2;
var result = maxAscendingSum(nums);
console.log(result, result === expected);

var nums = [5, 4, 3, 2, 1];
var expected = 5;
var result = maxAscendingSum(nums);
console.log(result, result === expected);
