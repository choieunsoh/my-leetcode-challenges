// 1642. Furthest Building You Can Reach
// https://leetcode.com/problems/furthest-building-you-can-reach/description/
// T.C.: O(N log N)
// S.C.: O(N)
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const n = heights.length;
  const ladderHeap = new MinHeap();
  for (let i = 0; i < n - 1; i++) {
    const diffHeight = heights[i + 1] - heights[i];
    if (diffHeight <= 0) continue;

    ladderHeap.push(diffHeight);
    if (ladderHeap.length <= ladders) continue;

    bricks -= ladderHeap.pop();
    if (bricks < 0) return i;
  }
  return n - 1;
};

var heights = [4, 2, 7, 6, 9, 14, 12],
  bricks = 5,
  ladders = 1;
var expected = 4;
var result = furthestBuilding(heights, bricks, ladders);
console.log(result, result === expected);

var heights = [4, 12, 2, 7, 3, 18, 20, 3, 19],
  bricks = 10,
  ladders = 2;
var expected = 7;
var result = furthestBuilding(heights, bricks, ladders);
console.log(result, result === expected);

var heights = [14, 3, 19, 3],
  bricks = 17,
  ladders = 0;
var expected = 3;
var result = furthestBuilding(heights, bricks, ladders);
console.log(result, result === expected);

var heights = [2, 7, 9, 3, 1, 2, 5, 9, 4, 6],
  bricks = 8,
  ladders = 2;
var expected = 9;
var result = furthestBuilding(heights, bricks, ladders);
console.log(result, result === expected);
