// 2149. Rearrange Array Elements by Sign
// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// Interviewer : We have some time left,
// I have one follow up question on this what if the order doesn't matter,
// can you do that in -place ?
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const n = nums.length;
  let pos = 0;
  let neg = 1;
  while (pos < n && neg < n) {
    if (nums[pos] >= 0) {
      pos += 2;
    } else if (nums[neg] < 0) {
      neg += 2;
    } else {
      [nums[pos], nums[neg]] = [nums[neg], nums[pos]];
    }
  }
  return nums;
};

var nums = [3, 1, -2, -5, 2, -4];
var expected = [3, -2, 1, -5, 2, -4];
var result = rearrangeArray(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 1];
var expected = [1, -1];
var result = rearrangeArray(nums);
console.log(result, result.join() === expected.join());

var nums = [28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31];
var expected = [28, -41, 22, -8, 46, -37, 35, -9, 18, -6, 19, -26, 15, -10, 31, -37, 14, -9];
var result = rearrangeArray(nums);
console.log(result, result.join() === expected.join());
