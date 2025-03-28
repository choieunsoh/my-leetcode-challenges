// 2503. Maximum Number of Points From Grid Queries
// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/description/
// T.C.: O(k*m*n)
// S.C.: O(m*n)
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

  const result = new Array(queries.length);
  for (let index = 0; index < queries.length; index++) {
    const query = queries[index];
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    let queue = [[grid[0][0], 0, 0]];
    visited[0][0] = true;

    let points = 0;
    while (queue.length) {
      const newQueue = [];
      for (const [, row, col] of queue) {
        if (grid[row][col] >= query) continue;

        points++;

        for (const [dr, dc] of dirs) {
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && grid[nr][nc] < query) {
            visited[nr][nc] = true;
            newQueue.push([grid[nr][nc], nr, nc]);
          }
        }
      }
      queue = newQueue;
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
