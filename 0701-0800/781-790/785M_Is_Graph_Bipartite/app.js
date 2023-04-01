// 785. Is Graph Bipartite?
// https://leetcode.com/problems/is-graph-bipartite/
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length;
  const color = Array(n).fill(-1);
  for (let node = 0; node < n; node++) {
    if (color[node] !== -1) continue;
    if (!dfs(node, 0)) return false;
  }
  return true;

  function dfs(node, teamColor) {
    color[node] = teamColor;
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (color[neighbor] === -1) {
        if (!dfs(neighbor, teamColor ^ 1)) return false;
      } else {
        if (color[neighbor] === color[node]) return false;
      }
    }
    return true;
  }
};

var graph = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
];
var expected = false;
var result = isBipartite(graph);
console.log(result, result === expected);

var graph = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
];
var expected = true;
var result = isBipartite(graph);
console.log(result, result === expected);
