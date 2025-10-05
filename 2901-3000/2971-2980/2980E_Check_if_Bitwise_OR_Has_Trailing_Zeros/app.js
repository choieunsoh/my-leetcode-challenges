// 2980. Check if Bitwise OR Has Trailing Zeros
// https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  let evens = 0;
  for (const num of nums) {
    if (num % 2 === 0) evens++;
    if (evens > 1) return true;
  }
  return false;
};

var nums = [1, 2, 3, 4, 5];
var expected = true;
var result = hasTrailingZeros(nums);
console.log(result, result === expected);

var nums = [2, 4, 8, 16];
var expected = true;
var result = hasTrailingZeros(nums);
console.log(result, result === expected);

var nums = [1, 3, 5, 7, 9];
var expected = false;
var result = hasTrailingZeros(nums);
console.log(result, result === expected);
