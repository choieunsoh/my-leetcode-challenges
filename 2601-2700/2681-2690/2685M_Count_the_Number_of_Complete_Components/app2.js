// 2685. Count the Number of Complete Components
// https://leetcode.com/problems/count-the-number-of-complete-components/
// T.C.: O(n + m log n)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  // Adjacency lists for each vertex
  const graph = Array.from({ length: n }, () => []);
  // Map to store frequency of each unique adjacency list
  const componentFreq = new Map();

  // Initialize adjacency lists with self-loops
  for (let vertex = 0; vertex < n; vertex++) {
    graph[vertex].push(vertex);
  }

  // Build adjacency lists from edges
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Count frequency of each unique adjacency pattern
  for (let vertex = 0; vertex < n; vertex++) {
    const neighbors = graph[vertex];
    neighbors.sort((a, b) => a - b);
    componentFreq.set(neighbors.join(','), (componentFreq.get(neighbors.join(',')) ?? 0) + 1);
  }

  // Count complete components where size equals frequency
  let completeCount = 0;
  for (const [vertices, count] of componentFreq) {
    if (vertices.split(',').length === count) {
      completeCount++;
    }
  }
  return completeCount;
};

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ];
var expected = 3;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ];
var expected = 1;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);
