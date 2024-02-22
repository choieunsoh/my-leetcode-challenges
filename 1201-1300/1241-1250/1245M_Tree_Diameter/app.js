// 1245. Tree Diameter
// https://leetcode.com/problems/tree-diameter/description/
// T.C: O(N)
// S.C: 0(N)
/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  const graph = Array.from({ length: edges.length + 1 }, () => new Set());
  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }

  const farthestNode = bfs(0, graph);
  const farthestFarthestNode = bfs(farthestNode[0], graph);
  return farthestFarthestNode[1];

  function bfs(start, graph) {
    const visited = new Set([start]);
    let queue = [start];
    let distance = -1;
    let lastNode = start;
    while (queue.length) {
      const nextQueue = [];
      for (const nextNode of queue) {
        for (const neighbor of graph[nextNode]) {
          if (visited.has(neighbor)) continue;
          visited.add(neighbor);
          nextQueue.push(neighbor);
          lastNode = neighbor;
        }
      }
      queue = nextQueue;
      distance++;
    }
    return [lastNode, distance];
  }
};

var edges = [
  [0, 1],
  [0, 2],
];
var expected = 2;
var result = treeDiameter(edges);
console.log(result, result === expected);

var edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
];
var expected = 4;
var result = treeDiameter(edges);
console.log(result, result === expected);
