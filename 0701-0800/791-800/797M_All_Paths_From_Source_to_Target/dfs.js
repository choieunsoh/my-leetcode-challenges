// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/
// T.C.: O(N*2^N)
// S.C.: O(N)
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  dfs(0, []);
  return result;

  function dfs(node, path) {
    if (node === graph.length - 1) {
      result.push([...path, node]);
      return;
    }

    for (const neighbor of graph[node]) {
      path.push(node);
      dfs(neighbor, path);
      path.pop();
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
