// 2493. Divide Nodes Into the Maximum Number of Groups
// https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/description/
// T.C.: O(n*(n+m))
// S.C.: O(n)
/*
A graph is bipartite when we can divide its nodes into two distinct sets where:
- All edges connect vertices from one set to vertices in the other set.
- No edges exist between vertices within the same set.
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
  const adjList = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const colors = new Array(n + 1).fill(-1);
  for (let node = 1; node <= n; node++) {
    if (colors[node] !== -1) continue;

    // Start coloring from uncolored nodes
    colors[node] = 0;

    // If the graph is not bipartite, return -1
    if (!isBipartite(node)) return -1;
  }

  // Calculate the longest shortest path for each node
  const distances = new Array(n + 1).fill(-1);
  for (let node = 1; node <= n; node++) {
    distances[node] = getLongestShortestPath(node);
  }

  // Calculate the total maximum number of groups across all components
  let maxNumberOfGroups = 0;
  const visited = new Array(n + 1).fill(false);
  for (let node = 1; node <= n; node++) {
    if (visited[node]) continue;

    // Add the number of groups for this component to the total
    maxNumberOfGroups += getNumberOfGroupsForComponent(node);
  }

  return maxNumberOfGroups;

  function isBipartite(node) {
    for (const neighbor of adjList[node]) {
      // If a neighbor has the same color as the current node, the graph is not bipartite
      if (colors[neighbor] === colors[node]) return false;

      // If the neighbor is already colored, skip it
      if (colors[neighbor] !== -1) continue;

      // Assign the opposite color to the neighbor
      colors[neighbor] = 1 - colors[node];

      // Recursively check bipartiteness for the neighbor; return false if it fails
      if (!isBipartite(neighbor)) return false;
    }

    // If all neighbors are properly colored, return true
    return true;
  }

  function getLongestShortestPath(startNode) {
    let queue = [startNode];
    const visited = new Array(n + 1).fill(false);
    visited[startNode] = true;

    let distance = 0;
    while (queue.length > 0) {
      const nextQueue = [];
      for (const currentNode of queue) {
        for (const neighbor of adjList[currentNode]) {
          if (visited[neighbor]) continue;

          visited[neighbor] = true;
          nextQueue.push(neighbor);
        }
      }

      queue = nextQueue;
      distance++;
    }
    return distance;
  }

  function getNumberOfGroupsForComponent(node) {
    // Start with the distance of the current node as the maximum
    let maxNumberOfGroups = distances[node];
    visited[node] = true;

    // Recursively calculate the maximum for all unvisited neighbors
    for (const neighbor of adjList[node]) {
      if (visited[neighbor]) continue;
      maxNumberOfGroups = Math.max(maxNumberOfGroups, getNumberOfGroupsForComponent(neighbor));
    }
    return maxNumberOfGroups;
  }
};

var n = 6,
  edges = [
    [1, 2],
    [1, 4],
    [1, 5],
    [2, 6],
    [2, 3],
    [4, 6],
  ];
var expected = 4;
var result = magnificentSets(n, edges);
console.log(result, result === expected);

var n = 3,
  edges = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
var expected = -1;
var result = magnificentSets(n, edges);
console.log(result, result === expected);
