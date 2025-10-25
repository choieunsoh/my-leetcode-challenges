// 2154. Keep Multiplying Found Values by Two
// https://leetcode.com/problems/keep-multiplying-found-values-by-two/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  const seen = new Set(nums);
  while (seen.has(original)) {
    original *= 2;
  }
  return original;
};

var nums = [5, 3, 6, 1, 12],
  original = 3;
var expected = 24;
var result = findFinalValue(nums, original);
console.log(result, result === expected);

var nums = [2, 7, 9],
  original = 4;
var expected = 4;
var result = findFinalValue(nums, original);
console.log(result, result === expected);
