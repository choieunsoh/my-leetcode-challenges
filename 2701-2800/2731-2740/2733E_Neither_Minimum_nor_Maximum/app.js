// 2733. Neither Minimum nor Maximum
// https://leetcode.com/problems/neither-minimum-nor-maximum/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  for (const num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }
  return -1;
};

var nums = [3, 2, 1, 4];
var expected = 3;
var result = findNonMinOrMax(nums);
console.log(result, result === expected);

var nums = [1, 2];
var expected = -1;
var result = findNonMinOrMax(nums);
console.log(result, result === expected);

var nums = [2, 1, 3];
var expected = 2;
var result = findNonMinOrMax(nums);
console.log(result, result === expected);
