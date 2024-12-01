/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
  const n = edges1.length + 1;
  const g1 = buildGraph(edges1);
  const g2 = buildGraph(edges2);

  const m = edges2.length + 1;
  let maxTree2Edges = 0;
  for (let j = 0; j < m; j++) {
    maxTree2Edges = Math.max(maxTree2Edges, bfs(g2, j, k - 1));
  }

  const result = new Array(n).fill(maxTree2Edges);
  for (let i = 0; i < n; i++) {
    result[i] += bfs(g1, i, k);
  }
  return result;

  function bfs(g, node, k) {
    let queue = [[node, 0]];
    const seen = new Set([node]);
    let count = 0;
    while (queue.length) {
      const nextQueue = [];
      for (const [node, edgeCount] of queue) {
        if (edgeCount > k) continue;
        count++;
        for (const neighbor of g[node]) {
          if (seen.has(neighbor)) continue;
          seen.add(neighbor);
          nextQueue.push([neighbor, edgeCount + 1]);
        }
      }
      queue = nextQueue;
    }
    return count;
  }

  function buildGraph(edges) {
    const n = edges.length + 1;
    const graph = Array.from({ length: n }, () => new Set());
    for (const [u, v] of edges) {
      graph[u].add(v);
      graph[v].add(u);
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
  ],
  k = 2;
var expected = [9, 7, 9, 8, 8];
var result = maxTargetNodes(edges1, edges2, k);
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
  ],
  k = 1;
var expected = [6, 3, 3, 3, 3];
var result = maxTargetNodes(edges1, edges2, k);
console.log(result, result.join() === expected.join());
