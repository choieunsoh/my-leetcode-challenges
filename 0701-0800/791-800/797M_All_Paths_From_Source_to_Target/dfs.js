// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  dfs(0, []);
  return result;

  function dfs(i, path) {
    if (i === graph.length - 1) {
      result.push([...path, i]);
      return;
    }

    for (const next of graph[i]) {
      dfs(next, [...path, i]);
    }
  }
};

var graph = [[1, 2], [3], [3], []];
var expected = [
  [0, 1, 3],
  [0, 2, 3],
];
var result = allPathsSourceTarget(graph);
console.log(result, result.join() === expected.join());

var graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
var expected = [
  [0, 4],
  [0, 3, 4],
  [0, 1, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 4],
];
var result = allPathsSourceTarget(graph);
console.log(result, result.join() === expected.join());
