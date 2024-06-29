// 2192. All Ancestors of a Node in a Directed Acyclic Graph
// https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/
// T.C.: O(n^2 + n*m)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const ancestors = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
  }

  for (let node = 0; node < n; node++) {
    findAncestorsDFS(node, node);
  }
  return ancestors;

  function findAncestorsDFS(node, ancestor) {
    for (const child of graph[node]) {
      if (ancestors[child].length === 0 || ancestors[child][ancestors[child].length - 1] !== ancestor) {
        ancestors[child].push(ancestor);
        findAncestorsDFS(child, ancestor);
      }
    }
  }
};

var n = 8,
  edgeList = [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ];
var expected = [[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]];
var result = getAncestors(n, edgeList);
console.log(result, result.join() === expected.join());

var n = 5,
  edgeList = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ];
var expected = [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]];
var result = getAncestors(n, edgeList);
console.log(result, result.join() === expected.join());
