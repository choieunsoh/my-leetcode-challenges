// 1260. Shift 2D Grid
// https://leetcode.com/problems/shift-2d-grid/description/
// T.C.: O(n*m*k)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  for (; k > 0; k--) {
    const newGrid = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0));
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        newGrid[row][col + 1] = grid[row][col];
      }
    }

    for (let row = 0; row < grid.length - 1; row++) {
      newGrid[row + 1][0] = grid[row][grid[0].length - 1];
    }

    newGrid[0][0] = grid[grid.length - 1][grid[0].length - 1];

    grid = newGrid;
  }
  return grid;
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
