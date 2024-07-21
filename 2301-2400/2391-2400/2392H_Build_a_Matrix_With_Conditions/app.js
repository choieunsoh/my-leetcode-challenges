// 2392. Build a Matrix With Conditions
// https://leetcode.com/problems/build-a-matrix-with-conditions/description/
// T.C.: O(max(k*k, n))
// S.C.: O(max(k*k, n))
/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  const rowOrder = topologicalSort(rowConditions, k);
  const colOrder = topologicalSort(colConditions, k);
  if (rowOrder.length === 0 || colOrder.length === 0) {
    return [];
  }

  const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (rowOrder[i] === colOrder[j]) {
        matrix[i][j] = rowOrder[i];
      }
    }
  }
  return matrix;

  function topologicalSort(edges, n) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const degree = new Array(n + 1).fill(0);
    for (const [u, v] of edges) {
      graph[u].push(v);
      degree[v]++;
    }

    const q = [];
    for (let i = 1; i <= n; i++) {
      if (degree[i] === 0) {
        q.push(i);
      }
    }

    let index = 0;
    const order = new Array(n).fill(0);
    while (q.length) {
      const u = q.shift();
      order[index++] = u;
      n--;
      for (const v of graph[u]) {
        degree[v]--;
        if (degree[v] === 0) {
          q.push(v);
        }
      }
    }

    if (n !== 0) return [];
    return order;
  }
};

var k = 3,
  rowConditions = [
    [1, 2],
    [3, 2],
  ],
  colConditions = [
    [2, 1],
    [3, 2],
  ];
var expected = [
  [0, 0, 1],
  [3, 0, 0],
  [0, 2, 0],
];
var result = buildMatrix(k, rowConditions, colConditions);
result.forEach((row) => console.log(row));
console.log(result, result.join() === expected.join());

var k = 3,
  rowConditions = [
    [1, 2],
    [2, 3],
    [3, 1],
    [2, 3],
  ],
  colConditions = [[2, 1]];
var expected = [];
var result = buildMatrix(k, rowConditions, colConditions);
console.log(result, result.join() === expected.join());
