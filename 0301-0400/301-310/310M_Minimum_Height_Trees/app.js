// 310. Minimum Height Trees
// https://leetcode.com/problems/minimum-height-trees/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const graph = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    inDegree[u]++;
    inDegree[v]++;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 1) queue.push(i);
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= queue.length;
    const newQueue = [];
    for (const node of queue) {
      for (const neighbor of graph[node]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 1) newQueue.push(neighbor);
      }
    }
    queue = newQueue;
  }

  return queue;
};

var n = 1,
  edges = [
    [1, 0],
    [0, 1],
  ];
var expected = [0];
var result = findMinHeightTrees(n, edges);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var n = 4,
  edges = [
    [1, 0],
    [1, 2],
    [1, 3],
  ];
var expected = [1];
var result = findMinHeightTrees(n, edges);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var n = 6,
  edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ];
var expected = [3, 4];
var result = findMinHeightTrees(n, edges);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
