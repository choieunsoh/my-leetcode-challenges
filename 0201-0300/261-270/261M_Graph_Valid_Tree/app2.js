// 261. Graph Valid Tree
// https://leetcode.com/problems/graph-valid-tree
// T.C.: O(N+E)
// S.C.: O(N+E)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n !== edges.length + 1) return false;

  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const visited = new Map();
  dfs(0);
  return visited.size === n;

  function dfs(node) {
    if (node === null) return;
    if (visited.has(node)) return;
    visited.set(node, 1);
    for (const child of adjList[node]) {
      dfs(child);
    }
  }
};

var n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ];
var expected = true;
var result = validTree(n, edges);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ];
var expected = false;
var result = validTree(n, edges);
console.log(result, result === expected);
