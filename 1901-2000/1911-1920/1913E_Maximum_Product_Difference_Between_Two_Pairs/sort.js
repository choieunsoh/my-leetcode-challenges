// 1913. Maximum Product Difference Between Two Pairs
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const [min1, min2] = nums;
  const minProduct = min1 * min2;
  const max1 = nums[nums.length - 2];
  const max2 = nums[nums.length - 1];
  const maxProduct = max1 * max2;
  return maxProduct - minProduct;
};

var nums = [5, 6, 2, 7, 4];
var expected = 34;
var result = maxProductDifference(nums);
console.log(result, result === expected);

var nums = [4, 2, 5, 9, 7, 4, 8];
var expected = 64;
var result = maxProductDifference(nums);
console.log(result, result === expected);
