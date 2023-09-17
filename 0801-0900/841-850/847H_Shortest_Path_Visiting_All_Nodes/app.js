// 847. Shortest Path Visiting All Nodes
// https://leetcode.com/problems/shortest-path-visiting-all-nodes
/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length;
  const fullBitmask = (1 << n) - 1;
  let queue = [];
  const distance = Array.from({ length: n }, () => new Array(fullBitmask + 1).fill(-1));
  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i]);
    distance[i][1 << i] = 0;
  }

  while (queue.length) {
    const nextQueue = [];
    for (const [node, bitmask] of queue) {
      if (bitmask === fullBitmask) {
        return distance[node][bitmask];
      }

      for (const neighbor of graph[node]) {
        const newBitmask = bitmask | (1 << neighbor);
        if (distance[neighbor][newBitmask] !== -1) continue;

        nextQueue.push([neighbor, newBitmask]);
        distance[neighbor][newBitmask] = distance[node][bitmask] + 1;
      }
    }
    queue = nextQueue;
  }
};

var graph = [[1, 2, 3], [0], [0], [0]];
var expected = 4;
var result = shortestPathLength(graph);
console.log(result, result === expected);

var graph = [[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]];
var expected = 4;
var result = shortestPathLength(graph);
console.log(result, result === expected);
