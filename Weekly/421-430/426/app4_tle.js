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

  let maxTree2Edges = 0;
  for (let j = 0; j < m; j++) {
    maxTree2Edges = Math.max(maxTree2Edges, bfs(g2, j, 1));
  }

  const result = new Array(n).fill(maxTree2Edges);
  for (let i = 0; i < n; i++) {
    result[i] += bfs(g1, i, 0);
  }
  return result;

  function bfs(graph, start, parity) {
    const queue = [start];
    const seen = new Set([start]);
    let level = 0;
    let count = 0;

    while (queue.length > 0) {
      const nextQueue = [];
      for (const node of queue) {
        if (level % 2 === parity) count++;
        for (const neighbor of graph[node]) {
          if (!seen.has(neighbor)) {
            seen.add(neighbor);
            nextQueue.push(neighbor);
          }
        }
      }
      queue.length = 0; // Clear the current queue
      queue.push(...nextQueue);
      level++;
    }

    return count;
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
