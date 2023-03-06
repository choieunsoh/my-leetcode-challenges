// 1630. Arithmetic Subarrays
// https://leetcode.com/problems/arithmetic-subarrays/
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    const valid = isArithmetic(l[i], r[i]);
    result.push(valid);
  }
  return result;

  function isArithmetic(left, right) {
    if (right - left < 2) return true;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    const seen = new Set();
    for (let i = left; i <= right; i++) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
      seen.add(nums[i]);
    }
    if ((max - min) % (right - left) !== 0) return false;

    const interval = (max - min) / (right - left);
    for (let i = 1; i <= right - left; i++) {
      const num = min + i * interval;
      if (!seen.has(num)) return false;
    }
    return true;
  }
};

var nums = [4, 6, 5, 9, 3, 7],
  l = [0, 0, 2],
  r = [2, 3, 5];
var expected = [true, false, true];
var result = checkArithmeticSubarrays(nums, l, r);
console.log(result, result.join() === expected.join());

var nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
  l = [0, 1, 6, 4, 8, 7],
  r = [4, 4, 9, 7, 9, 10];
var expected = [false, true, false, false, true, true];
var result = checkArithmeticSubarrays(nums, l, r);
console.log(result, result.join() === expected.join());
