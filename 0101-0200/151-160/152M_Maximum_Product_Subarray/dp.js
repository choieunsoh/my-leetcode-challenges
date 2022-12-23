// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let min = (max = result = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const tempMax = Math.max(num, num * min, num * max);
    min = Math.min(num, num * min, num * max);
    max = tempMax;
    result = Math.max(result, max);
  }
  return result;
};

var nums = [2, 3, -2, 4];
var expected = 6;
var result = maxProduct(nums);
console.log(result, result === expected);

var nums = [-2, 0, -1];
var expected = 0;
var result = maxProduct(nums);
console.log(result, result === expected);
