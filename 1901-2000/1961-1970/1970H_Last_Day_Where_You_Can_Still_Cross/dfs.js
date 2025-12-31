// 1970. Last Day Where You Can Still Cross
// https://leetcode.com/problems/last-day-where-you-can-still-cross/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (rows, cols, cells) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = 0;
  let left = 1;
  let right = rows * cols;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canCross(rows, cols, cells, mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function canCross(row, col, cells, day) {
    const grid = Array.from({ length: row }, () => Array(col).fill(0));
    for (let i = 0; i < day; ++i) {
      const r = cells[i][0] - 1;
      const c = cells[i][1] - 1;
      grid[r][c] = 1;
    }

    for (let i = 0; i < col; ++i) {
      if (grid[0][i] === 0 && dfs(grid, 0, i, row, col)) {
        return true;
      }
    }
    return false;
  }

  function dfs(grid, r, c, row, col) {
    if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] !== 0) {
      return false;
    }
    if (r === row - 1) {
      return true;
    }
    grid[r][c] = -1;
    for (let dir of directions) {
      const newR = r + dir[0];
      const newC = c + dir[1];
      if (dfs(grid, newR, newC, row, col)) {
        return true;
      }
    }
    return false;
  }
};

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ];
var expected = 2;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ];
var expected = 1;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 3,
  col = 3,
  cells = [
    [1, 2],
    [2, 1],
    [3, 3],
    [2, 2],
    [1, 1],
    [1, 3],
    [2, 3],
    [3, 2],
    [3, 1],
  ];
var expected = 3;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);
