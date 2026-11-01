// 453. Minimum Moves to Equal Array Elements
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let moves = 0;
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    moves += nums[i] - min;
  }
  return moves;
};

var nums = [1, 2, 3];
var expected = 3;
var result = minMoves(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 0;
var result = minMoves(nums);
console.log(result, result === expected);
