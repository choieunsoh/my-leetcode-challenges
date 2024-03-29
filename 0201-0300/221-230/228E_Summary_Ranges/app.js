// 228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  const result = [];
  for (let left = 0, right = 0; right < nums.length; right++) {
    if (nums[right] !== nums[right + 1] - 1) {
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
