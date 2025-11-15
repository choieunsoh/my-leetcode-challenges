// 1260. Shift 2D Grid
// https://leetcode.com/problems/shift-2d-grid/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;
  k %= total;
  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = (row * cols + col - k + total) % total;
      const gridRow = (index / cols) | 0;
      const gridCol = index % cols;
      result[row][col] = grid[gridRow][gridCol];
    }
  }
  return result;
};

var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
var expected = [
  [9, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13],
  ],
  k = 4;
var expected = [
  [12, 0, 21, 13],
  [3, 8, 1, 9],
  [19, 7, 2, 5],
  [4, 6, 11, 10],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 9;
var expected = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [[1], [2], [3], [4], [7], [6], [5]],
  k = 23;
var expected = [[6], [5], [1], [2], [3], [4], [7]];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());
