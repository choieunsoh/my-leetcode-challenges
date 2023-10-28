// 1217. Minimum Cost to Move Chips to The Same Position
// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  const nums = [0, 0];
  for (const pos of position) {
    nums[pos % 2]++;
  }
  return Math.min(...nums);
};

var position = [1, 2, 3];
var expected = 1;
var result = minCostToMoveChips(position);
console.log(result, result === expected);

var position = [2, 2, 2, 3, 3];
var expected = 2;
var result = minCostToMoveChips(position);
console.log(result, result === expected);

var position = [1, 1000000000];
var expected = 1;
var result = minCostToMoveChips(position);
console.log(result, result === expected);
