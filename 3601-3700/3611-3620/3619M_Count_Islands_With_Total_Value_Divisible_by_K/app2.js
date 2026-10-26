// 3619. Count Islands With Total Value Divisible by K
// https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [-1, 0, 1, 0, -1];
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0 && dfs(i, j) % k === 0) {
        result++;
      }
    }
  }
  return result;

  function dfs(i, j) {
    let sum = grid[i][j];
    grid[i][j] = 0;
    for (let d = 0; d < 4; d++) {
      const x = i + dirs[d],
        y = j + dirs[d + 1];
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] > 0) {
        sum += dfs(x, y);
      }
    }
    return sum;
  }
};

var grid = [
    [0, 2, 1, 0, 0],
    [0, 5, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [0, 1, 4, 7, 0],
    [0, 2, 0, 0, 8],
  ],
  k = 5;
var expected = 2;
var result = countIslands(grid, k);
console.log(result, result === expected);

var grid = [
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [3, 0, 3, 0],
  ],
  k = 3;
var expected = 6;
var result = countIslands(grid, k);
console.log(result, result === expected);
