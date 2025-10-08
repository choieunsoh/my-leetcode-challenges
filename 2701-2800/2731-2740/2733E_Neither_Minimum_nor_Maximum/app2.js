// 2733. Neither Minimum nor Maximum
// https://leetcode.com/problems/neither-minimum-nor-maximum/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1;

  const [a, b, c] = nums;
  const min = Math.min(a, b, c);
  const max = Math.max(a, b, c);

  if (a !== min && a !== max) return a;
  if (b !== min && b !== max) return b;
  return c;
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
