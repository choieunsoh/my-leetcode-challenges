// 453. Minimum Moves to Equal Array Elements
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  nums.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = moves + nums[i] - nums[i - 1];
    nums[i] += moves;
    moves += diff;
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
