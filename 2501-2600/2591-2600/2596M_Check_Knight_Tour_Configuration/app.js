// 2596. Check Knight Tour Configuration
// https://leetcode.com/problems/check-knight-tour-configuration/
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  const visited = new Set();
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  move(0, 0, 0);
  return visited.size === rows * cols;

  function move(row, col, index) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited.has(row * rows + col) || grid[row][col] !== index)
      return;
    visited.add(row * rows + col);
    for (const [r, c] of dir) {
      const [nr, nc] = [row + r, col + c];
      move(nr, nc, index + 1);
    }
  }
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
