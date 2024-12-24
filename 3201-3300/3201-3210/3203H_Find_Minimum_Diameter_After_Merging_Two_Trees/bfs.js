// 3203. Find Minimum Diameter After Merging Two Trees
// https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/description/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const graph1 = buildGraph(n, edges1);
  const graph2 = buildGraph(m, edges2);

  const diameter1 = findDiameter(graph1);
  const diameter2 = findDiameter(graph2);
  const connectedDiameter = Math.ceil(diameter1 / 2) + Math.ceil(diameter2 / 2) + 1;

  return Math.max(diameter1, diameter2, connectedDiameter);

  function buildGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  }

  function findDiameter(graph) {
    const farthestNode = findFarthestNode(graph, 0);
    return findFarthestNode(graph, farthestNode.node).distance;
  }

  function findFarthestNode(graph, start) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    visited[start] = true;
    let maxDistance = 0;
    let farthestNode = start;
    let queue = [start];
    while (queue.length) {
      const nextQueue = [];
      for (const node of queue) {
        farthestNode = node;
        for (const neighbor of graph[node]) {
          if (visited[neighbor]) continue;
          visited[neighbor] = true;
          nextQueue.push(neighbor);
        }
      }

      queue = nextQueue;
      if (queue.length > 0) {
        maxDistance++;
      }
    }
    return { node: farthestNode, distance: maxDistance };
  }
};

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  edges2 = [[0, 1]];
var expected = 3;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [2, 7],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [2, 7],
  ];
var expected = 5;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);

var edges1 = [
    [1, 4],
    [2, 5],
    [3, 2],
    [1, 3],
    [0, 1],
    [0, 6],
  ],
  edges2 = [
    [2, 1],
    [0, 2],
    [0, 3],
  ];
var expected = 6;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);
