// 3688. Bitwise OR of Even Numbers in an Array
// https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
  let result = 0;
  for (const num of nums) {
    if (num % 2 === 0) {
      result |= num;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 5, 6];
var expected = 6;
var result = evenNumberBitwiseORs(nums);
console.log(result, result === expected);

var nums = [7, 9, 11];
var expected = 0;
var result = evenNumberBitwiseORs(nums);
console.log(result, result === expected);

var nums = [1, 8, 16];
var expected = 24;
var result = evenNumberBitwiseORs(nums);
console.log(result, result === expected);
