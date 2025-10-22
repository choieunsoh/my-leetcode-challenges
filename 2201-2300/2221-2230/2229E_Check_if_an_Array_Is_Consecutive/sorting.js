// 2229. Check if an Array Is Consecutive
// https://leetcode.com/problems/check-if-an-array-is-consecutive/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) return false;
  }
  return true;
};

var nums = [1, 3, 4, 2];
var expected = true;
var result = isConsecutive(nums);
console.log(result, result === expected);

var nums = [1, 3];
var expected = false;
var result = isConsecutive(nums);
console.log(result, result === expected);

var nums = [3, 5, 4];
var expected = true;
var result = isConsecutive(nums);
console.log(result, result === expected);
