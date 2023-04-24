// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];
  if (stones.length === 0) return 0;

  const heap = stones.sort((a, b) => b - a);

  const y = heap[0];
  const x = heap[1];
  const newStone = y - x;

  if (newStone > 0) {
    heap.push(newStone);
  }

  return lastStoneWeight(heap.slice(2));
};

var stones = [2, 7, 4, 1, 8, 1];
var expected = 1;
var result = lastStoneWeight(stones);
console.log(result, result === expected);

var stones = [1];
var expected = 1;
var result = lastStoneWeight(stones);
console.log(result, result === expected);

var stones = [1, 1];
var expected = 0;
var result = lastStoneWeight(stones);
console.log(result, result === expected);
