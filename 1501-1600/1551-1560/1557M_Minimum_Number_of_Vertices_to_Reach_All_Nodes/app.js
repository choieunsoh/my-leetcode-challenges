// 1557. Minimum Number of Vertices to Reach All Nodes
// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const inDegree = Array(n).fill(false);
  for (const [, to] of edges) {
    inDegree[to] = true;
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    if (!inDegree[i]) result.push(i);
  }
  return result;
};

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ];
var expected = [0, 3];
var result = findSmallestSetOfVertices(n, edges);
console.log(result, result.join() === expected.join());

var n = 5,
  edges = [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ];
var expected = [0, 2, 3];
var result = findSmallestSetOfVertices(n, edges);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [1, 2],
    [1, 0],
    [0, 2],
  ];
var expected = [1];
var result = findSmallestSetOfVertices(n, edges);
console.log(result, result.join() === expected.join());
