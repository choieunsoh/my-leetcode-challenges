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
    let queue = [node];
    color[node] = 0;
    while (queue.length) {
      const nextQueue = [];
      for (const currNode of queue) {
        const teamColor = color[currNode];
        for (const neighbor of graph[currNode]) {
          if (color[neighbor] === teamColor) return false;
          if (color[neighbor] === -1) {
            nextQueue.push(neighbor);
            color[neighbor] = teamColor ^ 1;
          }
        }
      }
      queue = nextQueue;
    }
  }
  return true;
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
