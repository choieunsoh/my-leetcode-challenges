// 3736. Minimum Moves to Equal Array Elements III
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  const max = Math.max(...nums);
  return max * nums.length - total;
};

var nums = [2, 1, 3];
var expected = 3;
var result = minMoves(nums);
console.log(result, result === expected);

var nums = [4, 4, 5];
var expected = 2;
var result = minMoves(nums);
console.log(result, result === expected);
