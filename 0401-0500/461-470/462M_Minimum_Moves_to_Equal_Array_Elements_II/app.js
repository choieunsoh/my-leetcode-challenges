// 462. Minimum Moves to Equal Array Elements II
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  const midIndex = (nums.length / 2) | 0;
  const mid = nums[midIndex];
  let result = 0;
  for (const num of nums) {
    result += Math.abs(num - mid);
  }
  return result;
};

var nums = [1, 2, 3];
var expected = 2;
var result = minMoves2(nums);
console.log(result, result === expected);

var nums = [1, 10, 2, 9];
var expected = 16;
var result = minMoves2(nums);
console.log(result, result === expected);

var nums = [1, 0, 0, 8, 6];
var expected = 14;
var result = minMoves2(nums);
console.log(result, result === expected);
