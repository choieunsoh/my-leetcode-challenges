// 3151. Special Array I
// https://leetcode.com/problems/special-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (((nums[i - 1] & 1) ^ (nums[i] & 1)) === 0) return false;
  }
  return true;
};

var nums = [1];
var expected = true;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [2, 1, 4];
var expected = true;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [4, 3, 1, 6];
var expected = false;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [1, 5, 7];
var expected = false;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [4, 8, 6, 2];
var expected = false;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [6, 4, 8, 8, 2, 4, 2, 4, 8, 2, 2, 4, 4, 6, 5];
var expected = false;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [
  10, 31, 60, 89, 16, 85, 82, 39, 24, 53, 46, 53, 18, 33, 64, 1, 48, 15, 98, 33, 8, 3, 16, 81, 94, 31, 64, 13, 32, 43,
  10, 37, 82, 49, 66, 67, 84, 63, 72, 81, 54, 77, 64, 57, 68, 1, 30, 11, 86, 95, 10, 97, 72, 13, 36, 85, 6,
];
var expected = true;
var result = isArraySpecial(nums);
console.log(result, result === expected);

var nums = [
  54, 59, 76, 63, 12, 63, 12, 83, 28, 45, 98, 43, 88, 61, 62, 75, 84, 33, 18, 61, 30, 87, 52, 27, 84, 35, 36, 17, 62,
  39, 64, 19, 10, 15, 62, 23, 6, 99, 50, 23, 58, 61, 96, 95, 50, 55, 72, 87, 40, 91, 40, 73, 32, 11, 80, 51, 60, 15, 38,
  87, 16, 27, 80, 87, 82, 49, 56, 93, 70, 75, 2, 95,
];
var expected = true;
var result = isArraySpecial(nums);
console.log(result, result === expected);
