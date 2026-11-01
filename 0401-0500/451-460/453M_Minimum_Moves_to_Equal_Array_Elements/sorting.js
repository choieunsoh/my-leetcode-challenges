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
  let count = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    count += nums[i] - nums[0];
  }
  return count;
};

var nums = [1, 2, 3];
var expected = 3;
var result = minMoves(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 0;
var result = minMoves(nums);
console.log(result, result === expected);
