// 3650. Minimum Cost Path with Edge Reversals
// https://leetcode.com/problems/minimum-cost-path-with-edge-reversals/description/
// T.C.: O(n + m log m)
// S.C.: O(n + m)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function (n, edges) {
  const g = Array.from({ length: n }, () => []);
  for (const [x, y, w] of edges) {
    g[x].push([y, w]);
    g[y].push([x, 2 * w]);
  }

  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  dist[0] = 0;
  const pq = new PriorityQueue((a, b) => {
    return a[0] < b[0] ? -1 : 1;
  });
  pq.enqueue([0, 0]);

  while (!pq.isEmpty()) {
    const [currentDist, x] = pq.dequeue();
    if (x === n - 1) {
      return currentDist;
    }

    if (visited[x]) {
      continue;
    }
    visited[x] = true;

    for (const [y, w] of g[x]) {
      if (currentDist + w < dist[y]) {
        dist[y] = currentDist + w;
        pq.enqueue([dist[y], y]);
      }
    }
  }

  return -1;
};

var n = 4,
  edges = [
    [0, 1, 3],
    [3, 1, 1],
    [2, 3, 4],
    [0, 2, 2],
  ];
var expected = 5;
var result = minCost(n, edges);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 2, 1],
    [2, 1, 1],
    [1, 3, 1],
    [2, 3, 3],
  ];
var expected = 3;
var result = minCost(n, edges);
console.log(result, result === expected);
