// 2596. Check Knight Tour Configuration
// https://leetcode.com/problems/check-knight-tour-configuration/
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  if (grid[0][0] !== 0) return false;
  const m = grid.length;
  const n = grid[0].length;
  const mn = m * n;
  const values = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      values[grid[i][j]] = [i, j];
    }
  }
  for (let i = 1; i < mn; i++) {
    const [x1, y1] = values[i - 1];
    const [x2, y2] = values[i];
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
      continue;
    }
    return false;
  }
  return true;
};

var grid = [
  [0, 11, 16, 5, 20],
  [17, 4, 19, 10, 15],
  [12, 1, 8, 21, 6],
  [3, 18, 23, 14, 9],
  [24, 13, 2, 7, 22],
];
var expected = true;
var result = checkValidGrid(grid);
console.log(result, result === expected);

var grid = [
  [0, 3, 6],
  [5, 8, 1],
  [2, 7, 4],
];
var expected = false;
var result = checkValidGrid(grid);
console.log(result, result === expected);

var grid = [
  [0, 13, 1, 7, 20],
  [3, 8, 19, 12, 15],
  [18, 2, 14, 21, 6],
  [9, 4, 23, 16, 11],
  [24, 17, 10, 5, 22],
];
var expected = false;
var result = checkValidGrid(grid);
console.log(result, result === expected);

var grid = [
  [24, 11, 22, 17, 4],
  [21, 16, 5, 12, 9],
  [6, 23, 10, 3, 18],
  [15, 20, 1, 8, 13],
  [0, 7, 14, 19, 2],
];
var expected = false;
var result = checkValidGrid(grid);
console.log(result, result === expected);
