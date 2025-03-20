// 3108. Minimum Cost Walk in Weighted Graph
// https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/
// T.C.: O(n+m+q)
// S.C.: O(n+m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const componentCost = [];
  const visited = new Array(n).fill(false);
  const components = new Array(n).fill(0);
  let componentId = 0;
  for (let sourceNode = 0; sourceNode < n; sourceNode++) {
    if (visited[sourceNode]) continue;

    const cost = getComponentCost(sourceNode);
    componentCost.push(cost);
    componentId++;
  }

  const result = new Array(query.length).fill(-1);
  for (let i = 0; i < query.length; i++) {
    const [start, end] = query[i];
    if (components[start] !== components[end]) continue;
    result[i] = componentCost[components[start]];
  }
  return result;

  function getComponentCost(node) {
    // Initialize the cost to the number that has only 1s in its
    // binary representation
    let currentCost = Number.MAX_SAFE_INTEGER;

    // Mark the node as part of the current component
    components[node] = componentId;
    visited[node] = true;

    // Explore all neighbors of the current node
    for (const [neighbor, weight] of graph[node]) {
      // Update the cost by performing a bitwise AND of the edge
      // weights
      currentCost &= weight;

      if (!visited[neighbor]) {
        // Recursively calculate the cost of the rest of the component
        // and accumulate it into currentCost
        currentCost &= getComponentCost(neighbor);
      }
    }

    return currentCost;
  }
};

var n = 5,
  edges = [
    [0, 1, 7],
    [1, 3, 7],
    [1, 2, 1],
  ],
  query = [
    [0, 3],
    [3, 4],
  ];
var expected = [1, -1];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [0, 2, 7],
    [0, 1, 15],
    [1, 2, 6],
    [1, 2, 1],
  ],
  query = [[1, 2]];
var expected = [0];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());
