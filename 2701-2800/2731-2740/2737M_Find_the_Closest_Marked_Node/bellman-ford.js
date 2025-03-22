// 2737. Find the Closest Marked Node
// https://leetcode.com/problems/find-the-closest-marked-node/description/
// Bellman-Ford's Algorithm
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function (n, edges, s, marked) {
  // Initialize distances array with maximum values
  const MAX = Number.MAX_SAFE_INTEGER;
  const dist = new Array(n).fill(MAX);
  dist[s] = 0;

  // Bellman-Ford algorithm: relax edges n-1 times
  for (let iter = 0; iter < n - 1; iter++) {
    for (const [from, to, weight] of edges) {
      // Relaxation step: if we can improve the path to 'to' via 'from'
      if (dist[from] !== MAX && dist[from] + weight < dist[to]) {
        dist[to] = dist[from] + weight;
      }
    }
  }

  // Find minimum distance to any marked node
  let minDist = MAX;
  for (const node of marked) {
    if (dist[node] < minDist) {
      minDist = dist[node];
    }
  }

  // Return -1 if no path exists, otherwise return the minimum distance
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
