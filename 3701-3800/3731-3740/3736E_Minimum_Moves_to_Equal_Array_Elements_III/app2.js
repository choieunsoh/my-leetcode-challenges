// 3736. Minimum Moves to Equal Array Elements III
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let max = nums[0];
  for (const num of nums) {
    max = Math.max(max, num);
  }
  let result = 0;
  for (const num of nums) {
    result += max - num;
  }
  return result;
};

var nums = [2, 1, 3];
var expected = 3;
var result = minMoves(nums);
console.log(result, result === expected);

var nums = [4, 4, 5];
var expected = 2;
var result = minMoves(nums);
console.log(result, result === expected);
