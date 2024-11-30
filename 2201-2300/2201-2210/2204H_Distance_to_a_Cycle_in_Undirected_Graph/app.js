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
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    g[u].push(v);
    g[v].push(u);
  }

  // Detect and mark cycle nodes
  const isInCycle = new Array(n).fill(false);
  const visited = new Array(n).fill(false);
  const parent = new Array(n);
  detectCycleNodes(0);

  // Calculate distances starting from any cycle node
  visited.fill(false);
  const distances = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (isInCycle[i]) {
      calculateDistances(i, 0);
      break; // Only need to start from one cycle node
    }
  }
  return distances;

  // DFS to detect cycle nodes and mark them in `isInCycle`
  function detectCycleNodes(currentNode) {
    // Mark current node as visited
    visited[currentNode] = true;

    for (const neighbor of g[currentNode]) {
      if (!visited[neighbor]) {
        // Set parent for backtracking
        parent[neighbor] = currentNode;

        if (detectCycleNodes(neighbor)) {
          // Return true if cycle detected
          return true;
        }
      } else if (parent[currentNode] !== neighbor) {
        // Cycle detected
        // Mark the start of the cycle
        isInCycle[neighbor] = true;

        // Backtrack to mark all nodes in the cycle
        let tempNode = currentNode;
        while (tempNode !== neighbor) {
          isInCycle[tempNode] = true;
          tempNode = parent[tempNode];
        }
        return true;
      }
    }
    // No cycle found in this path
    return false;
  }

  // DFS to calculate distances from cycle nodes
  function calculateDistances(currentNode, currentDistance) {
    // Set distance for current node
    distances[currentNode] = currentDistance;

    // Mark node as visited
    visited[currentNode] = true;
    for (const neighbor of g[currentNode]) {
      // Skip if already visited
      if (visited[neighbor]) continue;

      const newDistance = isInCycle[neighbor] ? 0 : currentDistance + 1; // Reset if on cycle
      calculateDistances(neighbor, newDistance);
    }
  }
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
