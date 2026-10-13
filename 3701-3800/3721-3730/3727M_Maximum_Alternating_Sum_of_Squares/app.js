// 3727. Maximum Alternating Sum of Squares
// https://leetcode.com/problems/maximum-alternating-sum-of-squares/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] *= nums[i];
  }
  nums.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    result -= nums[i];
  }
  for (let i = Math.floor(n / 2); i < n; i++) {
    result += nums[i];
  }
  return result;
};

var nums = [1, 2, 3];
var expected = 12;
var result = maxAlternatingSum(nums);
console.log(result, result === expected);

var nums = [1, -1, 2, -2, 3, -3];
var expected = 16;
var result = maxAlternatingSum(nums);
console.log(result, result === expected);
