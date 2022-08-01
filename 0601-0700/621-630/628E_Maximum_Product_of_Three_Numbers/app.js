// https://leetcode.com/problems/maximum-product-of-three-numbers/
// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let maxNum1 = -Infinity,
    maxNum2 = -Infinity,
    maxNum3 = -Infinity;
  let minNum1 = Infinity,
    minNum2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= maxNum1) {
      maxNum3 = maxNum2;
      maxNum2 = maxNum1;
      maxNum1 = nums[i];
    } else if (nums[i] >= maxNum2) {
      maxNum3 = maxNum2;
      maxNum2 = nums[i];
    } else if (nums[i] > maxNum3) {
      maxNum3 = nums[i];
    }

    if (nums[i] <= minNum1) {
      minNum2 = minNum1;
      minNum1 = nums[i];
    } else if (nums[i] < minNum2) {
      minNum2 = nums[i];
    }
  }

  return Math.max(maxNum1 * maxNum2 * maxNum3, maxNum1 * minNum1 * minNum2);
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
