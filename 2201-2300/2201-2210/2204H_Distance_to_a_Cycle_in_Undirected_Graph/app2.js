// 2204. Distance to a Cycle in Undirected Graph
// https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/description/
// T.C.: O(n+e)
// S.C.: O(n+e)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function (n, edges) {
  const isInCycle = new Array(n).fill(true);
  const visited = new Array(n).fill(false);
  const degree = new Array(n).fill(0);
  const distances = new Array(n).fill(0);
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    g[u].push(v);
    g[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  // Start by adding all leaf nodes (degree 1) to the queue
  const nodeQueue = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      nodeQueue.push(i);
    }
  }

  // Perform BFS to remove nodes with degree 1, progressively reducing the graph
  while (nodeQueue.length) {
    const currentNode = nodeQueue.shift();
    isInCycle[currentNode] = false; // Mark the node as not in the cycle

    // Update the degree of neighbors and add them to the queue if their degree becomes 1
    for (const neighbor of g[currentNode]) {
      degree[neighbor]--;
      if (degree[neighbor] === 1) {
        nodeQueue.push(neighbor);
      }
    }
  }

  // Add all cycle nodes to the queue and mark them as visited
  for (let currentNode = 0; currentNode < n; currentNode++) {
    if (isInCycle[currentNode]) {
      nodeQueue.push(currentNode);
      visited[currentNode] = true;
    }
  }

  // BFS to calculate distances from cycle nodes
  let currentDistance = 0;
  while (nodeQueue.length) {
    // Track number of nodes to process at this distance level
    const queueSize = nodeQueue.length;
    for (let i = 0; i < queueSize; i++) {
      const currentNode = nodeQueue.shift();
      // Set the distance for the current node
      distances[currentNode] = currentDistance;

      // Add unvisited neighbors to the queue
      for (const neighbor of g[currentNode]) {
        if (visited[neighbor]) continue;
        nodeQueue.push(neighbor);
        visited[neighbor] = true;
      }
    }

    // Increment distance after processing all nodes at the current level
    currentDistance++;
  }
  return distances;
};

var n = 7,
  edges = [
    [1, 2],
    [2, 4],
    [4, 3],
    [3, 1],
    [0, 1],
    [5, 2],
    [6, 5],
  ];
var expected = [1, 0, 0, 0, 0, 1, 2];
var result = distanceToCycle(n, edges);
console.log(result, result.join() === expected.join());

var n = 9,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
    [2, 6],
    [6, 7],
    [6, 8],
    [0, 3],
    [3, 4],
    [3, 5],
  ];
var expected = [0, 0, 0, 1, 2, 2, 1, 2, 2];
var result = distanceToCycle(n, edges);
console.log(result, result.join() === expected.join());
