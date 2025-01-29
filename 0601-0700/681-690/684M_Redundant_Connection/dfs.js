// 684. Redundant Connection
// https://leetcode.com/problems/redundant-connection/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length;
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    const visited = new Array(n).fill(false);

    // If DFS returns true, we will return the edge.
    if (isConnected(u - 1, v - 1, visited, adjList)) {
      return [u, v];
    }

    adjList[u - 1].push(v - 1);
    adjList[v - 1].push(u - 1);
  }

  return [];

  function isConnected(src, target, visited, adjList) {
    visited[src] = true;

    if (src === target) {
      return true;
    }

    for (const adj of adjList[src]) {
      if (!visited[adj]) {
        if (isConnected(adj, target, visited, adjList)) {
          return true;
        }
      }
    }

    return false;
  }
};

var edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
var expected = [2, 3];
var result = findRedundantConnection(edges);
console.log(result, result.join() === expected.join());

var edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];
var expected = [1, 4];
var result = findRedundantConnection(edges);
console.log(result, result.join() === expected.join());
