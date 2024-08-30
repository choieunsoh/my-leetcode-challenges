// 2699. Modify Graph Edge Weights
// https://leetcode.com/problems/modify-graph-edge-weights/
// T.C.: O(E*(V+E)logV)
// S.C.: O(V+E)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const INF = 2e9;

  // Step 1: Build the graph, excluding edges with -1 weights
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    if (w !== -1) {
      graph[u].push([v, w]);
      graph[v].push([u, w]);
    }
  }

  // Step 2: Compute the initial shortest distance from source to destination
  const currentShortestDistance = dijkstra(source, destination);
  if (currentShortestDistance < target) {
    return [];
  }

  let matchesTarget = currentShortestDistance === target;

  // Step 3: Iterate through each edge to adjust its weight if necessary
  for (const edge of edges) {
    // Skip edges with already known weights
    if (edge[2] !== -1) continue;

    // Set edge weight to a large value if current distance matches target, else set to 1
    edge[2] = matchesTarget ? INF : 1;
    const [u, v, w] = edge;
    graph[u].push([v, w]);
    graph[v].push([u, w]);

    // Step 4: If current shortest distance does not match target
    if (!matchesTarget) {
      // Compute the new shortest distance with the updated edge weight
      const newDistance = dijkstra(source, destination);

      // If the new distance is within the target range, update edge weight to match target
      if (newDistance <= target) {
        matchesTarget = true;
        edge[2] += target - newDistance;
      }
    }
  }

  // Return modified edges if the target distance is achieved, otherwise return an
  // empty result
  return matchesTarget ? edges : [];

  function compare(x, y) {
    return x[0] - y[0] || x[1] - y[1];
  }

  function dijkstra(source, destination) {
    const minDistance = new Array(n).fill(INF);
    minDistance[source] = 0;

    const pq = new MinPriorityQueue({ compare });
    pq.enqueue([0, source]);
    while (pq.size()) {
      const [d, u] = pq.dequeue();
      if (d > minDistance[u]) continue;

      for (const [v, weight] of graph[u]) {
        if (d + weight < minDistance[v]) {
          minDistance[v] = d + weight;
          pq.enqueue([minDistance[v], v]);
        }
      }
    }
    return minDistance[destination];
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
  [4, 1, 1],
  [2, 0, 1],
  [0, 3, 1],
  [4, 3, 3],
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
  [1, 0, 4],
  [1, 2, 3],
  [2, 3, 5],
  [0, 3, 1],
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
  [1, 4, 1],
  [2, 4, 4],
  [3, 0, 2],
  [0, 4, 14],
  [1, 3, 10],
  [1, 0, 10],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());
