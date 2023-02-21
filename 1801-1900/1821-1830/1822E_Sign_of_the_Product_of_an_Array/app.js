// 1822. Sign of the Product of an Array
// https://leetcode.com/problems/sign-of-the-product-of-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let p = 1;
  for (const num of nums) {
    p *= num;
  }
  if (p > 0) return 1;
  if (p < 0) return -1;
  return 0;
};

var nums = [-1, -2, -3, -4, 3, 2, 1];
var expected = 1;
var result = arraySign(nums);
console.log(result, result === expected);

var nums = [1, 5, 0, 2, -3];
var expected = 0;
var result = arraySign(nums);
console.log(result, result === expected);

var nums = [-1, 1, -1, 1, -1];
var expected = -1;
var result = arraySign(nums);
console.log(result, result === expected);
