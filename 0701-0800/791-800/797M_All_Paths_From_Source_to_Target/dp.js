// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/
// T.C.: O(N*2^N)
// S.C.: O(N*2^N)
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;
  const memo = new Map();
  return allPathsToTarget(0);

  function allPathsToTarget(currNode) {
    // memoization. check the result in the cache first
    if (memo.has(currNode)) {
      return memo.get(currNode);
    }

    const results = [];

    // base case
    if (currNode === target) {
      results.push([target]);
      return results;
    }

    // iterate through the paths starting from each neighbor.
    for (const nextNode of graph[currNode]) {
      for (const path of allPathsToTarget(nextNode)) {
        results.push([currNode, ...path]);
      }
    }
    memo.set(currNode, results);
    return results;
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
