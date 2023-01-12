// 1519. Number of Nodes in the Sub-Tree With the Same Label
// https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const result = [];
  const count = Array(26).fill(0);
  dfs(0, -1);

  function dfs(node, parent) {
    const ch = labels.charCodeAt(node) - 97;
    const prevCount = count[ch];
    const nodes = graph[node];
    for (const child of nodes) {
      if (child === parent) continue;
      dfs(child, node);
    }
    count[ch]++;
    result[node] = count[ch] - prevCount;
  }

  return result;
};

var n = 4,
  edges = [
    [0, 2],
    [0, 3],
    [1, 2],
  ],
  labels = 'aeed';
var expected = [1, 1, 2, 1];
var result = countSubTrees(n, edges, labels);
console.log(result, result.join() === expected.join());

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  labels = 'abaedcd';
var expected = [2, 1, 1, 1, 1, 1, 1];
var result = countSubTrees(n, edges, labels);
console.log(result, result.join() === expected.join());

var n = 4,
  edges = [
    [0, 1],
    [1, 2],
    [0, 3],
  ],
  labels = 'bbbb';
var expected = [4, 2, 1, 1];
var result = countSubTrees(n, edges, labels);
console.log(result, result.join() === expected.join());

var n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [0, 4],
  ],
  labels = 'aabab';
var expected = [3, 2, 1, 1, 1];
var result = countSubTrees(n, edges, labels);
console.log(result, result.join() === expected.join());
