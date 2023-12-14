// 2482. Difference Between Ones and Zeros in Row and Column
// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/
// T.C.: O(m * n)
// S.C.: O(m + n)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const diff = Array.from({ length: m }, () => new Array(n).fill(0));
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const bit = grid[i][j];
      rows[i] += bit;
      cols[j] += bit;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = 2 * rows[i] + 2 * cols[j] - m - n;
    }
  }
  return diff;
};

var grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];
var expected = [
  [0, 0, 4],
  [0, 0, 4],
  [-2, -2, 2],
];
var result = onesMinusZeros(grid);
result.forEach((line) => console.log(line));
console.log(JSON.stringify(result) === JSON.stringify(expected));

var grid = [
  [1, 1, 1],
  [1, 1, 1],
];
var expected = [
  [5, 5, 5],
  [5, 5, 5],
];
var result = onesMinusZeros(grid);
result.forEach((line) => console.log(line));
console.log(JSON.stringify(result) === JSON.stringify(expected));
