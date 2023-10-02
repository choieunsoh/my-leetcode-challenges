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

  const adj = new Map();
  for (const [from, to] of edges) {
    if (!adj.has(from)) adj.set(from, []);
    if (!adj.has(to)) adj.set(to, []);
    adj.get(from).push(to);
    adj.get(to).push(from);
  }

  const visited = new Map();
  dfs(0);
  return visited.size === n && visited.size === edges.length + 1;

  function dfs(node) {
    if (node === null) return;
    if (visited.has(node)) return;
    visited.set(node, 1);
    const children = adj.get(node);
    if (!children) return;
    for (const child of children) {
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
