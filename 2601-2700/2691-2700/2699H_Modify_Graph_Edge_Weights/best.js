// 2699. Modify Graph Edge Weights
// https://leetcode.com/problems/modify-graph-edge-weights/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
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
  const g = buildGraph(edges);
  const d = dijkstra(g, start); // first run
  if (d[dest] === target) return go(g);
  if (d[dest] < target) return [];

  for (const [u, v] of canModify) {
    g[u].set(v, 1);
    g[v].set(u, 1); // change each edge 2e9 -> 1, run current scenario
    const d = dijkstra(g, start);
    if (d[dest] <= target) {
      // current_dis < target, answer is current scenario
      const gap = target - d[dest];
      const pre = g[u].get(v);
      const update = pre + gap;
      g[u].set(v, update);
      g[v].set(u, update);
      return go(g);
    }
  }
  return [];

  function compare(x, y) {
    if (x[0] !== y[0]) return x[0] - y[0];
    return x[1] - y[1];
  }

  function dijkstra(g, start) {
    const n = g.length;
    const dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    const pq = new PriorityQueue(compare);
    dis[start] = 0;
    pq.enqueue([0, start]);
    while (pq.size()) {
      const [d, curr] = pq.dequeue();
      if (d > dis[curr]) continue;

      for (const [child, cost] of g[curr]) {
        const toChildCost = d + cost;
        if (toChildCost < dis[child]) {
          dis[child] = toChildCost;
          pq.enqueue([toChildCost, child]);
        }
      }
    }
    return dis; // min distance: start -> all other nodes
  }

  function go(g) {
    let res = new Set();
    for (let i = 0; i < n; i++) {
      for (const [child, cost] of g[i]) {
        // remove duplicates needs
        res.add(JSON.stringify([Math.min(i, child), Math.max(i, child), cost]));
      }
    }
    return [...res].map((e) => JSON.parse(e));
  }

  function buildGraph(edges) {
    const g = Array.from({ length: n }, () => new Map());
    for (let i = 0; i < edges.length; i++) {
      const [u, v, cost] = edges[i];
      if (cost === -1) {
        canModify.push([u, v, cost]);
        edges[i][2] = 2e9; // (1)
      }
      g[u].set(v, edges[i][2]);
      g[v].set(u, edges[i][2]);
    }
    return g;
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
