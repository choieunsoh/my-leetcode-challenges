// 2699. Modify Graph Edge Weights
// https://leetcode.com/problems/modify-graph-edge-weights/
// T.C.: O(E*V^2)
// S.C.: O(V^2)
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

  // Step 1: Compute the initial shortest distance from source to destination
  const currentShortestDistance = dijkstra(n, edges, source, destination);

  // If the current shortest distance is less than the target, return an empty result
  if (currentShortestDistance < target) return [];

  let matchesTarget = currentShortestDistance === target;

  // Step 2: Iterate through each edge to adjust its weight if necessary
  for (const edge of edges) {
    // Skip edges that already have a positive weight
    if (edge[2] > 0) continue;

    // Set edge weight to a large value if current distance matches target, else set to 1
    edge[2] = matchesTarget ? INF : 1;

    // Step 3: If current shortest distance does not match target
    if (!matchesTarget) {
      // Compute the new shortest distance with the updated edge weight
      const newDistance = dijkstra(n, edges, source, destination);

      // If the new distance is within the target range, update edge weight to match target
      if (newDistance <= target) {
        matchesTarget = true;
        edge[2] += target - newDistance;
      }
    }
  }

  for (const edge of edges) {
    if (edge[2] === INF) edge[2] = target - 1;
  }

  // Return modified edges if the target distance is achieved, otherwise return an empty result
  return matchesTarget ? edges : [];

  function dijkstra(n, edges, source, destination) {
    // Step 1: Initialize adjacency matrix and distance arrays
    const graph = Array.from({ length: n }, () => new Array(n).fill(INF));
    const minDistance = new Array(n).fill(INF);
    const visited = new Array(n).fill(false);

    // Set the distance to the source node as 0
    minDistance[source] = 0;

    // Step 2: Fill the adjacency matrix with edge weights
    for (const [u, v, w] of edges) {
      if (w !== -1) {
        graph[u][v] = w;
        graph[v][u] = w;
      }
    }

    // Step 3: Perform Dijkstra's algorithm
    for (let i = 0; i < n; i++) {
      // Find the nearest unvisited node
      let nearestUnvisitedNode = -1;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && (nearestUnvisitedNode === -1 || minDistance[j] < minDistance[nearestUnvisitedNode])) {
          nearestUnvisitedNode = j;
        }
      }

      // Mark the nearest node as visited
      visited[nearestUnvisitedNode] = true;

      // Update the minimum distance for each adjacent node
      for (let v = 0; v < n; v++) {
        minDistance[v] = Math.min(minDistance[v], minDistance[nearestUnvisitedNode] + graph[nearestUnvisitedNode][v]);
      }
    }

    // Return the shortest distance to the destination node
    return minDistance[destination];
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
