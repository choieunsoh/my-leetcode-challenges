// 228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  let result = [];
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right === nums.length || nums[right] !== nums[right + 1] - 1) {
      if (left === right) {
        result.push(`${nums[left]}`);
      } else {
        result.push(`${nums[left]}->${nums[right]}`);
      }
      left = right + 1;
    }
  }
  return result;
};

var nums = [0, 1, 2, 4, 5, 7];
var expected = ['0->2', '4->5', '7'];
var result = summaryRanges(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 2, 3, 4, 6, 8, 9];
var expected = ['0', '2->4', '6', '8->9'];
var result = summaryRanges(nums);
console.log(result, result.join() === expected.join());
