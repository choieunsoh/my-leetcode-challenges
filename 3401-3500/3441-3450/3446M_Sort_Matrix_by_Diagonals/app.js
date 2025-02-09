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
    for (let j = 0; j < n; j++) {
      diagonals[i - j + n - 1].push(grid[i][j]);
    }
  }

  for (let i = 0; i < diagonals.length; i++) {
    if (i < n - 1) {
      diagonals[i].sort((a, b) => b - a);
    } else {
      diagonals[i].sort((a, b) => a - b);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = diagonals[i - j + n - 1].pop();
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
