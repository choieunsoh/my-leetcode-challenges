// 2699. Modify Graph Edge Weights
// https://leetcode.com/problems/modify-graph-edge-weights/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, start, dest, target) {
  const canModify = [];
  const graph = buildGraph(edges);

  const d = dijkstra(graph, start); // first run
  if (d[dest] === target) return buildResult(graph);
  if (d[dest] < target) return [];

  for (const [u, v] of canModify) {
    graph[u].set(v, 1);
    graph[v].set(u, 1); // change each edge 2e9 -> 1, run current scenario
    const d = dijkstra(graph, start);
    if (d[dest] <= target) {
      // current_dis < target, answer is current scenario
      const gap = target - d[dest];
      const pre = graph[u].get(v);
      const update = pre + gap;
      graph[u].set(v, update);
      graph[v].set(u, update);
      return buildResult(graph);
    }
  }
  return [];

  function compare(x, y) {
    return x[0] - y[0] || x[1] - y[1];
  }

  function dijkstra(graph, start) {
    const n = graph.length;
    const dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    const pq = new MinPriorityQueue({ compare });
    dis[start] = 0;
    pq.enqueue([0, start]);
    while (pq.size()) {
      const [d, curr] = pq.dequeue();
      if (d > dis[curr]) continue;

      for (const [child, cost] of graph[curr]) {
        const toChildCost = d + cost;
        if (toChildCost < dis[child]) {
          dis[child] = toChildCost;
          pq.enqueue([toChildCost, child]);
        }
      }
    }
    return dis; // min distance: start -> all other nodes
  }

  function buildResult(graph) {
    const result = new Set();
    for (let i = 0; i < n; i++) {
      for (const [child, cost] of graph[i]) {
        // remove duplicates needs
        result.add(JSON.stringify([Math.min(i, child), Math.max(i, child), cost]));
      }
    }
    const edges = [...result].map((e) => JSON.parse(e));
    for (const edge of edges) {
      if (edge[2] === 2e9) edge[2] = target - 1;
    }
    return edges;
  }

  function buildGraph(edges) {
    const graph = Array.from({ length: n }, () => new Map());
    for (let i = 0; i < edges.length; i++) {
      const [u, v, cost] = edges[i];
      if (cost === -1) {
        canModify.push([u, v, cost]);
        edges[i][2] = 2e9;
      }
      graph[u].set(v, edges[i][2]);
      graph[v].set(u, edges[i][2]);
    }
    return graph;
  }
};

var n = 5,
  edges = [
    [4, 1, -1],
    [2, 0, -1],
    [0, 3, -1],
    [4, 3, -1],
  ],
  source = 0,
  destination = 1,
  target = 5;
var expected = [
  [0, 2, 1],
  [0, 3, 1],
  [1, 4, 1],
  [3, 4, 3],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [0, 1, -1],
    [0, 2, 5],
  ],
  source = 0,
  destination = 2,
  target = 6;
var expected = [];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());

var n = 4,
  edges = [
    [1, 0, 4],
    [1, 2, 3],
    [2, 3, 5],
    [0, 3, -1],
  ],
  source = 0,
  destination = 2,
  target = 6;
var expected = [
  [0, 1, 4],
  [0, 3, 1],
  [1, 2, 3],
  [2, 3, 5],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());

var n = 5,
  edges = [
    [1, 4, 1],
    [2, 4, -1],
    [3, 0, 2],
    [0, 4, -1],
    [1, 3, 10],
    [1, 0, 10],
  ],
  source = 0,
  destination = 2,
  target = 15;
var expected = [
  [0, 3, 2],
  [0, 4, 14],
  [0, 1, 10],
  [1, 4, 1],
  [1, 3, 10],
  [2, 4, 4],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());
