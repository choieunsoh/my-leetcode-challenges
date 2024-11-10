// 323. Number of Connected Components in an Undirected Graph
// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
// T.C.: O(E+V)
// S.C.: O(E+V)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const visited = new Array(n);
  let components = 0;
  const graph = new Array(n);
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      components++;
      dfs(i);
    }
  }
  return components;

  function dfs(node) {
    visited[node] = true;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }
};

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
var expected = 2;
var result = countComponents(n, edges);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ];
var expected = 1;
var result = countComponents(n, edges);
console.log(result, result === expected);
