// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let product = 1;
  let zeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroes++;
    product *= nums[i] === 0 ? 1 : nums[i];
  }
  if (zeroes > 1) return Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result[i] = product;
    } else if (zeroes === 1) {
      result[i] = 0;
    } else {
      result[i] = product / nums[i];
    }
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
