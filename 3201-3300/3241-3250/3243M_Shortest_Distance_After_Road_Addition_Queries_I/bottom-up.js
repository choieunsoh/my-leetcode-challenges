// 3243. Shortest Distance After Road Addition Queries I
// https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/description/
// T.C.: O(q * (n + q))
// S.C.: O(n + q)
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const result = [];
  const adjList = [];

  // Initialize adjacency list
  for (let i = 0; i < n; i++) {
    adjList.push([]);
  }

  // Initialize edges between consecutive nodes
  for (let i = 0; i < n - 1; i++) {
    adjList[i].push(i + 1);
  }

  // Process each query to add new edges
  for (const [u, v] of queries) {
    adjList[u].push(v); // Add the directed edge from u to v

    // Calculate the minimum distance after adding the new edge
    result.push(findMinDistance(adjList, n));
  }

  return result; // Return the results for each query

  function findMinDistance(adjList, n) {
    const dp = new Array(n).fill(0);
    dp[n - 1] = 0; // Base case: distance to destination (n-1) is 0

    // Iterate from the second last node down to the first node
    for (let currentNode = n - 2; currentNode >= 0; currentNode--) {
      let minDistance = n;
      // Explore neighbors to find the minimum distance
      for (const neighbor of adjList[currentNode]) {
        minDistance = Math.min(minDistance, dp[neighbor] + 1);
      }
      dp[currentNode] = minDistance; // Store the calculated distance for the current node
    }
    return dp[0];
  }
};

var n = 5,
  queries = [
    [2, 4],
    [0, 2],
    [0, 4],
  ];
var expected = [3, 2, 1];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 4,
  queries = [
    [0, 3],
    [0, 2],
  ];
var expected = [1, 1];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 14,
  queries = [
    [0, 6],
    [4, 12],
  ];
var expected = [8, 6];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());
