// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
    pq.enqueue(stone);
  }

  while (pq.size() > 1) {
    const y = pq.dequeue();
    const x = pq.dequeue();
    pq.enqueue(y - x);
  }

  return pq.front();
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
