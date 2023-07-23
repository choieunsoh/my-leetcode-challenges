// 2784. Check if Array is Good
// https://leetcode.com/problems/check-if-array-is-good/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length - 1;
  const target = (n * (n + 1)) / 2 + n;
  const sum = nums.reduce((s, n) => s + n, 0);
  return target === sum;
};

var nums = [1, 2, 3, 3];
var expected = true;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 1, 2, 4, 4];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = true;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [9, 9];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);
