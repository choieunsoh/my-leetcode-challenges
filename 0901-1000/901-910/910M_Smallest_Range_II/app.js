// 910. Smallest Range II
// https://leetcode.com/problems/smallest-range-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  nums.sort((a, b) => a - b);
  const left = nums[0];
  const right = nums[nums.length - 1];
  let result = right - left;
  for (let i = 0; i < nums.length - 1; i++) {
    const max = Math.max(right - k, nums[i] + k);
    const min = Math.min(left + k, nums[i + 1] - k);
    result = Math.min(result, max - min);
  }
  return result;
};

var nums = [1],
  k = 0;
var expected = 0;
var result = smallestRangeII(nums, k);
console.log(result, result === expected);

var nums = [0, 10],
  k = 2;
var expected = 6;
var result = smallestRangeII(nums, k);
console.log(result, result === expected);

var nums = [1, 3, 6],
  k = 3;
var expected = 3;
var result = smallestRangeII(nums, k);
console.log(result, result === expected);
