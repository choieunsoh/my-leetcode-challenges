// 2784. Check if Array is Good
// https://leetcode.com/problems/check-if-array-is-good/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length - 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return false;
    }
  }
  return nums[n] === n;
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
