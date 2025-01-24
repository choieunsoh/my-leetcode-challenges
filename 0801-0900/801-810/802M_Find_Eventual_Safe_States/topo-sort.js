// 802. Find Eventual Safe States
// https://leetcode.com/problems/find-eventual-safe-states/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const safeNodes = new Array(n).fill(false);
  const indegree = new Array(n).fill(0);
  const adj = Array.from({ length: n }, () => []);
  for (let node = 0; node < n; node++) {
    for (const neighbor of graph[node]) {
      adj[neighbor].push(node);
      indegree[node]++;
    }
  }

  let queue = [];
  for (let node = 0; node < n; node++) {
    if (indegree[node] === 0) queue.push(node);
  }

  while (queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      safeNodes[node] = true;
      for (const neighbor of adj[node]) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) nextQueue.push(neighbor);
      }
    }
    queue = nextQueue;
  }

  const result = [];
  for (let node = 0; node < n; node++) {
    if (safeNodes[node]) result.push(node);
  }
  return result;
};

var graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
var expected = [2, 4, 5, 6];
var result = eventualSafeNodes(graph);
console.log(result, result.join() === expected.join());

var graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
var expected = [4];
var result = eventualSafeNodes(graph);
console.log(result, result.join() === expected.join());

var graph = [[], [0, 2, 3, 4], [3], [4], []];
var expected = [0, 1, 2, 3, 4];
var result = eventualSafeNodes(graph);
console.log(result, result.join() === expected.join());
