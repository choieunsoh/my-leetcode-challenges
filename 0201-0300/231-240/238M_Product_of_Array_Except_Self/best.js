// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [1];
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
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
