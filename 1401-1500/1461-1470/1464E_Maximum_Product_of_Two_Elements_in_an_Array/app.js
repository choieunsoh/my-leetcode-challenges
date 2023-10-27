// 1464. Maximum Product of Two Elements in an Array
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let biggest = 0;
  let secondBiggest = 0;
  for (const num of nums) {
    if (num >= biggest) {
      [biggest, secondBiggest] = [num, biggest];
    } else if (num >= secondBiggest) {
      secondBiggest = num;
    }
  }
  return (secondBiggest - 1) * (biggest - 1);
};

var nums = [3, 4, 5, 2];
var expected = 12;
var result = maxProduct(nums);
console.log(result, result === expected);

var nums = [1, 5, 4, 5];
var expected = 16;
var result = maxProduct(nums);
console.log(result, result === expected);

var nums = [3, 7];
var expected = 12;
var result = maxProduct(nums);
console.log(result, result === expected);
