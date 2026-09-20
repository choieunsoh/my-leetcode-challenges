// 4052. Cyclically Shift Rows and Columns
// https://leetcode.com/problems/cyclically-shift-rows-and-columns/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (n, grid, rowShift, colShift) {
  for (let i = 0; i < n; i++) {
    hshift(grid[i], rowShift[i]);
  }

  for (let i = 0; i < n; i++) {
    vshift(grid, colShift[i], i);
  }

  return grid;

  function hshift(row, k) {
    if (k === 0) return;

    let l = 0;
    let r = k - 1;
    while (l < r) {
      [row[l], row[r]] = [row[r], row[l]];
      l++;
      r--;
    }

    l = k;
    r = row.length - 1;
    while (l < r) {
      [row[l], row[r]] = [row[r], row[l]];
      l++;
      r--;
    }

    l = 0;
    r = row.length - 1;
    while (l < r) {
      [row[l], row[r]] = [row[r], row[l]];
      l++;
      r--;
    }
  }

  function vshift(grid, k, col) {
    if (k === 0) return;

    let l = 0;
    let r = k - 1;
    while (l < r) {
      [grid[l][col], grid[r][col]] = [grid[r][col], grid[l][col]];
      l++;
      r--;
    }

    l = k;
    r = grid.length - 1;
    while (l < r) {
      [grid[l][col], grid[r][col]] = [grid[r][col], grid[l][col]];
      l++;
      r--;
    }

    l = 0;
    r = grid.length - 1;
    while (l < r) {
      [grid[l][col], grid[r][col]] = [grid[r][col], grid[l][col]];
      l++;
      r--;
    }
  }
};

var n = 2,
  grid = [
    [1, 2],
    [3, 4],
  ],
  rowShift = [1, 0],
  colShift = [0, 1];
var expected = [
  [2, 4],
  [3, 1],
];
var result = cyclicShift(n, grid, rowShift, colShift);
console.log(result, result.toString() === expected.toString());

var n = 3,
  grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  rowShift = [1, 2, 0],
  colShift = [2, 2, 1];
var expected = [
  [7, 8, 5],
  [2, 3, 9],
  [6, 4, 1],
];
var result = cyclicShift(n, grid, rowShift, colShift);
console.log(result, result.toString() === expected.toString());
