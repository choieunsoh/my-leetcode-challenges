// 3373. Maximize the Number of Target Nodes After Connecting Trees II
// https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const g1 = buildGraph(edges1, n);
  const g2 = buildGraph(edges2, m);

  const parity1 = new Array(n).fill(false);
  const parity2 = new Array(m).fill(false);
  const even1 = dfs(0, -1, g1, parity1);
  const even2 = dfs(0, -1, g2, parity2);

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = Math.max(even2, m - even2) + (parity1[i] ? even1 : n - even1);
  }
  return result;

  function dfs(node, parent, adj, parity, even = true) {
    let result = even;
    parity[node] = even;
    for (const neighbor of adj[node]) {
      if (neighbor !== parent) {
        result += dfs(neighbor, node, adj, parity, !even);
      }
    }
    return result;
  }

  function buildGraph(edges, size) {
    const graph = Array.from({ length: size }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  }
};

var edges1 = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 7],
    [1, 4],
    [4, 5],
    [4, 6],
  ];
var expected = [8, 7, 7, 8, 8];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  edges2 = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];
var expected = [3, 6, 6, 6, 6];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());
