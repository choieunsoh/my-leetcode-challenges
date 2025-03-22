// 2737. Find the Closest Marked Node
// https://leetcode.com/problems/find-the-closest-marked-node/description/
// Shortest Path Faster Algorithm (SPFA)
// T.C.: O(n*m)
// S.C.: O(n+m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function (n, edges, s, marked) {
  const MAX = Number.MAX_SAFE_INTEGER;
  // Adjacency list representation
  const graph = Array.from({ length: n }, () => []);
  // Build the graph
  for (const [from, to, weight] of edges) {
    graph[from].push([to, weight]);
  }

  // Distance array
  const dist = new Array(n).fill(MAX);
  dist[s] = 0;

  const queue = [s];

  // Track nodes in queue
  const inQueue = new Array(n).fill(false);
  inQueue[s] = true;

  while (queue.length) {
    const current = queue.shift();
    inQueue[current] = false;

    // Explore neighbors
    for (const [nextNode, weight] of graph[current]) {
      // Relaxation step
      if (dist[nextNode] > dist[current] + weight) {
        dist[nextNode] = dist[current] + weight;

        // Add to queue if not already in queue
        if (!inQueue[nextNode]) {
          queue.push(nextNode);
          inQueue[nextNode] = true;
        }
      }
    }
  }

  // Find minimum distance to any marked node
  let minDist = MAX;
  for (const node of marked) {
    minDist = Math.min(minDist, dist[node]);
  }
  return minDist === MAX ? -1 : minDist;
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
