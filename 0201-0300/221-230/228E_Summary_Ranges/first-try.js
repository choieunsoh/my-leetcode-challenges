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
  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
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
