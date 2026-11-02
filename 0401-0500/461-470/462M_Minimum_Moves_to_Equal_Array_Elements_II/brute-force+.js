// 462. Minimum Moves to Equal Array Elements II
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    let sum = 0;
    for (const n of nums) {
      sum += Math.abs(n - num);
    }
    min = Math.min(min, sum);
  }
  return min;
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
