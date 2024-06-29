// 2192. All Ancestors of a Node in a Directed Acyclic Graph
// https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/
// T.C.: O(n^2 log n + m)
// S.C.: O(n^2 + m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  let zeroIndegreeNodes = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      zeroIndegreeNodes.push(i);
    }
  }

  const topologicalOrder = [];
  while (zeroIndegreeNodes.length) {
    const newZeroIndegreeNodes = [];

    for (const node of zeroIndegreeNodes) {
      topologicalOrder.push(node);
      for (const neighbor of graph[node]) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          newZeroIndegreeNodes.push(neighbor);
        }
      }
    }

    zeroIndegreeNodes = newZeroIndegreeNodes;
  }

  const ancestorsSetList = Array.from({ length: n }, () => new Set());
  for (const node of topologicalOrder) {
    for (const neighbor of graph[node]) {
      ancestorsSetList[neighbor].add(node);
      for (const ancestor of ancestorsSetList[node]) {
        ancestorsSetList[neighbor].add(ancestor);
      }
    }
  }

  const ancestorsList = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    ancestorsList[i] = Array.from(ancestorsSetList[i]);
    ancestorsList[i].sort((a, b) => a - b);
  }
  return ancestorsList;
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
