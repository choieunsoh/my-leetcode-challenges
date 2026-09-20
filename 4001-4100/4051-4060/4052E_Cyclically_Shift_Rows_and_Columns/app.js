// 4052. Cyclically Shift Rows and Columns
// https://leetcode.com/problems/cyclically-shift-rows-and-columns/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (n, grid, rowShift, colShift) {
  const rowshifted = [];
  const result = [];

  for (let i = 0; i < n; i++) {
    const newrow = [];
    const k = rowShift[i];

    for (let m = 0; m < n; m++) {
      newrow.push(grid[i][(m + k) % n]);
    }
    rowshifted.push(newrow);
  }

  for (let i = 0; i < n; i++) {
    result.push(new Array(n));
  }

  for (let j = 0; j < n; j++) {
    const k = colShift[j];
    for (let m = 0; m < n; m++) {
      result[m][j] = rowshifted[(m + k) % n][j];
    }
  }
  return result;
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
