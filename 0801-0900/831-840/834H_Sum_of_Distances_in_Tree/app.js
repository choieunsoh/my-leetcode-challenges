// 834. Sum of Distances in Tree
// https://leetcode.com/problems/sum-of-distances-in-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  const result = new Array(n).fill(0);
  const count = new Array(n).fill(1);
  const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  dfs(0, -1);
  dfs2(0, -1);
  return result;

  function dfs(node, parent) {
    for (const child of graph[node]) {
      if (child === parent) continue;
      dfs(child, node);
      count[node] += count[child];
      result[node] += result[child] + count[child];
    }
  }

  function dfs2(node, parent) {
    for (const child of graph[node]) {
      if (child === parent) continue;
      result[child] = result[node] - count[child] + n - count[child];
      dfs2(child, node);
    }
  }
};

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ];
var expected = [8, 12, 6, 10, 10, 10];
var result = sumOfDistancesInTree(n, edges);
console.log(result, result.join() === expected.join());

var n = 1,
  edges = [];
var expected = [0];
var result = sumOfDistancesInTree(n, edges);
console.log(result, result.join() === expected.join());

var n = 2,
  edges = [[1, 0]];
var expected = [1, 1];
var result = sumOfDistancesInTree(n, edges);
console.log(result, result.join() === expected.join());
