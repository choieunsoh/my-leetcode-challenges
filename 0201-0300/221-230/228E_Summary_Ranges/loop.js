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
  let result = [];
  let index = 0;
  while (index < nums.length) {
    let start = nums[index];
    while (index + 1 < nums.length && nums[index] + 1 === nums[index + 1]) {
      index++;
    }
    if (start === nums[index]) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${nums[index]}`);
    }
    index++;
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
