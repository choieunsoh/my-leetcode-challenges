// 1167. Minimum Cost to Connect Sticks
// https://leetcode.com/problems/minimum-cost-to-connect-sticks/
// T.C.: O(N log N)
// S.C.: O(N)
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  let totalCost = 0;
  const heap = new MinHeap(sticks);
  while (heap.length > 1) {
    const firstStick = heap.pop();
    const secondStick = heap.pop();
    const cost = firstStick + secondStick;
    totalCost += cost;
    heap.push(cost);
  }
  return totalCost;
};

var sticks = [2, 4, 3];
var expected = 14;
var result = connectSticks(sticks);
console.log(result, result === expected);

var sticks = [1, 8, 3, 5];
var expected = 30;
var result = connectSticks(sticks);
console.log(result, result === expected);

var sticks = [5];
var expected = 0;
var result = connectSticks(sticks);
console.log(result, result === expected);
