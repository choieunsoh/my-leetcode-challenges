// 2392. Build a Matrix With Conditions
// https://leetcode.com/problems/build-a-matrix-with-conditions/description/
// T.C.: O(max(k*k, n))
// S.C.: O(max(k*k, n))
/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  const rowOrder = topologicalSort(rowConditions, k);
  const colOrder = topologicalSort(colConditions, k);
  if (rowOrder.length === 0 || colOrder.length === 0) {
    return [];
  }

  const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (rowOrder[i] === colOrder[j]) {
        matrix[i][j] = rowOrder[i];
      }
    }
  }
  return matrix;

  function topologicalSort(edges, n) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
    }

    const order = new Array(n).fill(0);
    // 0: not visited, 1: visiting, 2: visited
    const visited = new Array(n + 1).fill(0);
    const hasCycle = [false];

    // Perform DFS for each node
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0) {
        dfs(i, adj, visited, order, hasCycle);
        // Return empty if cycle detected
        if (hasCycle[0]) return [];
      }
    }

    order.reverse();
    return order;
  }

  function dfs(node, adj, visited, order, hasCycle) {
    visited[node] = 1; // Mark node as visiting
    for (const neighbor of adj[node]) {
      if (visited[neighbor] === 0) {
        dfs(neighbor, adj, visited, order, hasCycle);
        // Early exit if a cycle is detected
        if (hasCycle[0]) return;
      } else if (visited[neighbor] === 1) {
        // Cycle detected
        hasCycle[0] = true;
        return;
      }
    }

    // Mark node as visited
    visited[node] = 2;
    // Add node to the order
    order.push(node);
  }
};

var k = 3,
  rowConditions = [
    [1, 2],
    [3, 2],
  ],
  colConditions = [
    [2, 1],
    [3, 2],
  ];
var expected = [
  [3, 0, 0],
  [0, 0, 1],
  [0, 2, 0],
];
var result = buildMatrix(k, rowConditions, colConditions);
result.forEach((row) => console.log(row));
console.log(result, result.join() === expected.join());

var k = 3,
  rowConditions = [
    [1, 2],
    [2, 3],
    [3, 1],
    [2, 3],
  ],
  colConditions = [[2, 1]];
var expected = [];
var result = buildMatrix(k, rowConditions, colConditions);
console.log(result, result.join() === expected.join());
