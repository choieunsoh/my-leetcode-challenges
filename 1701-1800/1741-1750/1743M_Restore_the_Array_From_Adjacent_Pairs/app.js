// 1743. Restore the Array From Adjacent Pairs
// https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const map = new Map();
  for (const [u, v] of adjacentPairs) {
    if (!map.has(u)) map.set(u, []);
    map.get(u).push(v);
    if (!map.has(v)) map.set(v, []);
    map.get(v).push(u);
  }

  const nums = new Set();
  let queue = [];
  for (const [num, list] of map) {
    if (list.length === 1) {
      queue.push(num);
      nums.add(num);
      break;
    }
  }

  while (queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      const list = map.get(node);
      for (const num of list) {
        if (nums.has(num)) continue;
        nums.add(num);
        nextQueue.push(num);
      }
    }
    queue = nextQueue;
  }
  return [...nums];
};

var adjacentPairs = [
  [2, 1],
  [3, 4],
  [3, 2],
];
var expected = [1, 2, 3, 4];
var result = restoreArray(adjacentPairs);
console.log(result, result.join() === expected.join());

var adjacentPairs = [
  [4, -2],
  [1, 4],
  [-3, 1],
];
var expected = [-2, 4, 1, -3];
var result = restoreArray(adjacentPairs);
console.log(result, result.join() === expected.join());

var adjacentPairs = [[100000, -100000]];
var expected = [100000, -100000];
var result = restoreArray(adjacentPairs);
console.log(result, result.join() === expected.join());
