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
  for (const [u, v] of edges) {
    graph[v].push(u);
  }

  const ancestorsList = new Array(n);
  for (let parent = 0; parent < n; parent++) {
    const ancestors = [];
    const visited = new Set();
    findChildren(parent, visited);
    for (let node = 0; node < n; node++) {
      if (node === parent) continue;
      if (visited.has(node)) {
        ancestors.push(node);
      }
    }
    ancestorsList[parent] = ancestors;
  }
  return ancestorsList;

  function findChildren(node, visited) {
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        findChildren(neighbor, visited);
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
