// https://leetcode.com/problems/maximum-product-of-three-numbers/
// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const N = nums.length;
  if (N === 3) return nums[0] * nums[1] * nums[2];
  nums.sort((a, b) => a - b);
  let result = nums[N - 1] * nums[N - 2] * nums[N - 3];
  if (nums[0] < 0 && nums[1] < 0) {
    result = Math.max(result, nums[N - 1] * nums[0] * nums[1]);
  }
  return result;
};

var nums = [1, 2, 3];
var expected = 6;
var result = maximumProduct(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 24;
var result = maximumProduct(nums);
console.log(result, result === expected);

var nums = [-1, -2, -3];
var expected = -6;
var result = maximumProduct(nums);
console.log(result, result === expected);
