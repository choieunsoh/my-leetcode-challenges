// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  const pq = new MinPriorityQueue();
  for (const block of blocks) {
    pq.enqueue(block);
  }

  // Make sibling blocks until we are left with only one root node
  while (pq.size() > 1) {
    // Pop two minimum. The time of the abstracted sub-root will be
    // split + max(x, y) which is split + y
    const x = pq.dequeue();
    const y = pq.dequeue();
    pq.enqueue(split + y);
  }

  // Time of final root node
  return pq.dequeue();
};

var blocks = [1],
  split = 1;
var expected = 1;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2],
  split = 5;
var expected = 7;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2, 3],
  split = 1;
var expected = 4;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);
