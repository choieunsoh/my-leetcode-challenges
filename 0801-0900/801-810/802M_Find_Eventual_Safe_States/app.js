// 802. Find Eventual Safe States
// https://leetcode.com/problems/find-eventual-safe-states/description/
// T.C.: O(m+n)
// S.C.: O(n)
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const unsafeNodes = new Array(n).fill(false);
  const visited = new Array(n).fill(false);
  for (let node = 0; node < n; node++) {
    dfs(node);
  }

  const result = [];
  for (let node = 0; node < n; node++) {
    if (!unsafeNodes[node]) result.push(node);
  }
  return result;

  function dfs(node) {
    if (unsafeNodes[node]) return true;
    if (visited[node]) return false;

    visited[node] = true;
    unsafeNodes[node] = true;

    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    unsafeNodes[node] = false;
    return false;
  }
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
