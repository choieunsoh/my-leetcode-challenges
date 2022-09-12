// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  const leftProduct = Array(nums.length).fill(0);
  leftProduct[0] = 1;
  const rightProduct = Array(nums.length).fill(0);
  rightProduct[nums.length - 1] = 1;
  for (let i = 0, j = nums.length - 1; i < nums.length - 1, j > 0; i++, j--) {
    leftProduct[i + 1] = leftProduct[i] * nums[i];
    rightProduct[j - 1] = rightProduct[j] * nums[j];
  }

  for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
    result[i] = leftProduct[i] * rightProduct[i];
  }

  return result;
};

var nums = [1, 2, 3, 4];
var expected = [24, 12, 8, 6];
var result = productExceptSelf(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 1, 0, -3, 3];
var expected = [0, 0, 9, 0, 0];
var result = productExceptSelf(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 0, 0, -3, 3];
var expected = [0, 0, 0, 0, 0];
var result = productExceptSelf(nums);
console.log(result, result.join() === expected.join());
