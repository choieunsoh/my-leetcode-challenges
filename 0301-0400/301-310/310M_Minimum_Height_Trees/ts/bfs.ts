// 310. Minimum Height Trees
// https://leetcode.com/problems/minimum-height-trees/
// T.C.: O(n)
// S.C.: O(n)
var findMinHeightTrees = function (n: number, edges: number[][]): number[] {
  if (n === 1) return [0];

  const graph: Array<Array<number>> = Array.from({ length: n }, () => []);
  const indegree: Array<number> = new Array(n).fill(0);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    indegree[u]++;
    indegree[v]++;
  }

  let queue: Array<number> = [];
  for (let node = 0; node < n; node++) {
    if (indegree[node] === 1) queue.push(node);
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= queue.length;
    const newQueue: Array<number> = [];
    for (const node of queue) {
      for (const neighbor of graph[node]) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 1) newQueue.push(neighbor);
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
