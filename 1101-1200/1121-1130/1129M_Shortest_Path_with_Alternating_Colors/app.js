// 1129. Shortest Path with Alternating Colors
// https://leetcode.com/problems/shortest-path-with-alternating-colors/
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const [RED, BLUE] = [0, 1];
  const adj = new Map();
  for (const [from, to] of redEdges) {
    const nodes = adj.get(from) ?? [];
    nodes.push([to, RED]);
    adj.set(from, nodes);
  }
  for (const [from, to] of blueEdges) {
    const nodes = adj.get(from) ?? [];
    nodes.push([to, BLUE]);
    adj.set(from, nodes);
  }

  const result = Array(n).fill(-1);
  result[0] = 0;
  const visited = Array.from({ length: n }, () => [false, false]);
  visited[0][RED] = visited[0][BLUE] = true;
  const queue = [[0, 0, -1]];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const [node, steps, prevColor] = queue.shift();
      if (!adj.has(node)) continue;

      const neighbors = adj.get(node);
      for (const [neighbor, color] of neighbors) {
        if (!visited[neighbor][color] && color !== prevColor) {
          visited[neighbor][color] = true;
          if (result[neighbor] === -1) {
            result[neighbor] = steps + 1;
          }
          queue.push([neighbor, steps + 1, color]);
        }
      }
    }
  }

  return result;
};

var n = 3,
  redEdges = [
    [0, 1],
    [1, 2],
  ],
  blueEdges = [];
var expected = [0, 1, -1];
var result = shortestAlternatingPaths(n, redEdges, blueEdges);
console.log(result, result.join() === expected.join());

var n = 3,
  redEdges = [[0, 1]],
  blueEdges = [[2, 1]];
var expected = [0, 1, -1];
var result = shortestAlternatingPaths(n, redEdges, blueEdges);
console.log(result, result.join() === expected.join());

var n = 3,
  redEdges = [[0, 1]],
  blueEdges = [[1, 2]];
var expected = [0, 1, 2];
var result = shortestAlternatingPaths(n, redEdges, blueEdges);
console.log(result, result.join() === expected.join());

var n = 5,
  redEdges = [
    [0, 1],
    [4, 3],
  ],
  blueEdges = [
    [1, 4],
    [3, 2],
  ];
var expected = [0, 1, 4, 3, 2];
var result = shortestAlternatingPaths(n, redEdges, blueEdges);
console.log(result, result.join() === expected.join());
