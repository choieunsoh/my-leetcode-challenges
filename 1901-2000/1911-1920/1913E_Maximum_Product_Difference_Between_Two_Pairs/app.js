// 1913. Maximum Product Difference Between Two Pairs
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let min1 = (min2 = Number.MAX_SAFE_INTEGER);
  let max1 = (max2 = Number.MIN_SAFE_INTEGER);
  for (const num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
    if (num > max2) {
      max1 = max2;
      max2 = num;
    } else if (num > max1) {
      max1 = num;
    }
    console.log(num, [min1, min2], [max1, max2]);
  }
  return max1 * max2 - min1 * min2;
};

var nums = [5, 6, 2, 7, 4];
var expected = 34;
var result = maxProductDifference(nums);
console.log(result, result === expected);

var nums = [4, 2, 5, 9, 7, 4, 8];
var expected = 64;
var result = maxProductDifference(nums);
console.log(result, result === expected);

var nums = [1, 6, 7, 5, 2, 4, 10, 6, 4];
var expected = 68;
var result = maxProductDifference(nums);
console.log(result, result === expected);

var nums = [5, 6, 2, 7, 4];
var expected = 34;
var result = maxProductDifference(nums);
console.log(result, result === expected);
