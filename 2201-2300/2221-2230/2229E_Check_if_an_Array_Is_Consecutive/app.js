// 2229. Check if an Array Is Consecutive
// https://leetcode.com/problems/check-if-an-array-is-consecutive/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function (nums) {
  if (nums.length === 1) return true;

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  if (max - min !== nums.length - 1) return false;

  const seen = new Set(nums);
  for (let num = min; num <= max; num++) {
    if (!seen.has(num)) return false;
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
