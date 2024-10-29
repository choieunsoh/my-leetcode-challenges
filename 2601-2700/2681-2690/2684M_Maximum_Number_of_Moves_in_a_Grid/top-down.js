// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const dirs = [-1, 0, 1];
  const rows = grid.length;
  const cols = grid[0].length;
  const memo = Array.from({ length: rows }, () => new Array(cols));

  let maxMoves = -1;
  for (let row = 0; row < rows; row++) {
    maxMoves = Math.max(maxMoves, dfs(row, 0));
  }
  return maxMoves;

  function dfs(row, col) {
    if (memo[row][col] !== undefined) {
      return memo[row][col];
    }

    let maxMoves = 0;
    for (const dir of dirs) {
      const [nextRow, nextCol] = [row + dir, col + 1];
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) continue;
      if (grid[nextRow][nextCol] <= grid[row][col]) continue;
      maxMoves = Math.max(maxMoves, 1 + dfs(nextRow, nextCol));
    }

    memo[row][col] = maxMoves;
    return maxMoves;
  }
};

var grid = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
];
var expected = 3;
var result = maxMoves(grid);
console.log(result, result === expected);

var grid = [
  [3, 2, 4],
  [2, 1, 9],
  [1, 1, 7],
];
var expected = 0;
var result = maxMoves(grid);
console.log(result, result === expected);
