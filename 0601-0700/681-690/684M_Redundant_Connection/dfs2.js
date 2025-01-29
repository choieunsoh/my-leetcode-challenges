// 684. Redundant Connection
// https://leetcode.com/problems/redundant-connection/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let cycleStart = -1;
  const n = edges.length;
  const visited = new Array(n).fill(false);
  const parent = new Array(n).fill(-1);
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u - 1].push(v - 1);
    adjList[v - 1].push(u - 1);
  }

  dfs(0, visited, adjList, parent);

  const cycleNodes = new Map();
  let node = cycleStart;
  // Start from the cycleStart node and backtrack to get all the nodes in
  // the cycle. Mark them all in the map.
  do {
    cycleNodes.set(node, 1);
    node = parent[node];
  } while (node !== cycleStart);

  // If both nodes of the edge were marked as cycle nodes then this edge
  // can be removed.
  for (let i = edges.length - 1; i >= 0; i--) {
    const [u, v] = edges[i];
    if (cycleNodes.has(u - 1) && cycleNodes.has(v - 1)) {
      return edges[i];
    }
  }

  return [];

  function dfs(src, visited, adjList, parent) {
    visited[src] = true;

    for (const adj of adjList[src]) {
      if (!visited[adj]) {
        parent[adj] = src;
        dfs(adj, visited, adjList, parent);
        // If the node is visited and the parent is different then the
        // node is part of the cycle.
      } else if (adj !== parent[src] && cycleStart === -1) {
        cycleStart = adj;
        parent[adj] = src;
      }
    }
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
