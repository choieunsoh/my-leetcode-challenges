// 3446. Sort Matrix by Diagonals
// https://leetcode.com/problems/sort-matrix-by-diagonals/description/
// T.C.: O(n^2 log n)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
  const n = grid.length;
  const diagonals = Array.from({ length: 2 * n - 1 }, () => []);
  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j + i < n; j++) {
      temp.push(grid[i + j][j]);
    }
    temp.sort((a, b) => b - a);
    for (let j = 0; j + i < n; j++) {
      grid[i + j][j] = temp[j];
    }
  }

  for (let j = 1; j < n; j++) {
    const temp = [];
    for (let i = 0; i + j < n; i++) {
      temp.push(grid[i][j + i]);
    }
    temp.sort((a, b) => a - b);
    for (let i = 0; i + j < n; i++) {
      grid[i][j + i] = temp[i];
    }
  }
  return grid;
};

var grid = [
  [1, 7, 3],
  [9, 8, 2],
  [4, 5, 6],
];
var expected = [
  [8, 2, 3],
  [9, 6, 7],
  [4, 5, 1],
];
var result = sortMatrix(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [0, 1],
  [1, 2],
];
var expected = [
  [2, 1],
  [1, 0],
];
var result = sortMatrix(grid);
console.log(result, result.join() === expected.join());

var grid = [[1]];
var expected = [[1]];
var result = sortMatrix(grid);
console.log(result, result.join() === expected.join());
