// 2737. Find the Closest Marked Node
// https://leetcode.com/problems/find-the-closest-marked-node/description/
// Dijkstra's Algorithm
// T.C.: O((n+m) log n)
// S.C.: O(n+m)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function (n, edges, s, marked) {
  const markSet = new Set(marked);
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  const dist = new Array(n).fill(Infinity);
  dist[s] = 0;

  // weight, node
  const pq = new MinPriorityQueue((x) => x[0]);
  pq.enqueue([0, s]);

  while (!pq.isEmpty()) {
    const [distance, u] = pq.dequeue();
    if (markSet.has(u)) return distance;

    for (const [v, weight] of graph[u]) {
      const newDistance = distance + weight;
      if (newDistance < dist[v]) {
        dist[v] = newDistance;
        pq.enqueue([dist[v], v]);
      }
    }
  }

  return -1;
};

var n = 4,
  edges = [
    [0, 1, 1],
    [1, 2, 3],
    [2, 3, 2],
    [0, 3, 4],
  ],
  s = 0,
  marked = [2, 3];
var expected = 4;
var result = minimumDistance(n, edges, s, marked);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1, 2],
    [0, 2, 4],
    [1, 3, 1],
    [2, 3, 3],
    [3, 4, 2],
  ],
  s = 1,
  marked = [0, 4];
var expected = 3;
var result = minimumDistance(n, edges, s, marked);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 1, 1],
    [1, 2, 3],
    [2, 3, 2],
  ],
  s = 3,
  marked = [0, 1];
var expected = -1;
var result = minimumDistance(n, edges, s, marked);
console.log(result, result === expected);
