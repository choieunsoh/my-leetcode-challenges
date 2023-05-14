// 2685. Count the Number of Complete Components
// https://leetcode.com/problems/count-the-number-of-complete-components/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  let count = 0;
  const adj = Array.from({ length: n }, () => []);
  const visited = Array(n).fill(false);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  for (let node = 0; node < n; node++) {
    if (visited[node]) continue;
    const [nodes, edges] = dfs(node);
    if (edges === nodes * (nodes - 1)) count++;
  }

  return count;

  function dfs(node) {
    if (visited[node]) return [0, 0];
    visited[node] = true;
    let edges = adj[node].length;
    let nodes = 1;
    for (const next of adj[node]) {
      const [nextNodes, nextEdges] = dfs(next);
      edges += nextEdges;
      nodes += nextNodes;
    }
    return [nodes, edges];
  }
};

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ];
var expected = 3;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ];
var expected = 1;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);
