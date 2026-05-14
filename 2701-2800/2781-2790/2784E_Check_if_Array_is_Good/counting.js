// 2784. Check if Array is Good
// https://leetcode.com/problems/check-if-array-is-good/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length;
  const count = new Array(n).fill(0);
  for (const num of nums) {
    if (num >= n) {
      return false;
    }
    if (num < n - 1 && count[num] > 0) {
      return false;
    }
    if (num === n - 1 && count[num] > 1) {
      return false;
    }
    count[num]++;
  }
  return true;
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

var nums = [1, 4, 5, 4, 3, 3];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);
