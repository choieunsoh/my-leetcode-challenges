// 2503. Maximum Number of Points From Grid Queries
// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/description/
// T.C.: O(k log k + mn log mn)
// S.C.: O(k + mn)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const rows = grid.length;
  const cols = grid[0].length;
  const queryIndices = queries.map((query, index) => [query, index]);
  queryIndices.sort((a, b) => a[0] - b[0]);

  const result = new Array(queries.length).fill(0);
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const pq = new MinPriorityQueue((a) => a[0]);

  let points = 0;
  pq.enqueue([grid[0][0], 0, 0]);
  visited[0][0] = true;

  for (const [query, index] of queryIndices) {
    while (!pq.isEmpty() && pq.front()[0] < query) {
      const [, row, col] = pq.dequeue();
      points++;

      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
          visited[nr][nc] = true;
          pq.enqueue([grid[nr][nc], nr, nc]);
        }
      }
    }
    result[index] = points;
  }

  return result;
};

var grid = [
    [1, 2, 3],
    [2, 5, 7],
    [3, 5, 1],
  ],
  queries = [5, 6, 2];
var expected = [5, 8, 1];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());

var grid = [
    [5, 2, 1],
    [1, 1, 2],
  ],
  queries = [3];
var expected = [0];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());
