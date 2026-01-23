// 1895. Largest Magic Square
// https://leetcode.com/problems/largest-magic-square/description/
// T.C.: O(m*n*min(m,n)^2)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // prefix sum of each row
  const rowSum = Array.from({ length: m }, () => new Array(n));
  for (let i = 0; i < m; i++) {
    rowSum[i][0] = grid[i][0];
    for (let j = 1; j < n; j++) {
      rowSum[i][j] = rowSum[i][j - 1] + grid[i][j];
    }
  }

  // prefix sum of each column
  const colSum = Array.from({ length: m }, () => new Array(n));
  for (let j = 0; j < n; j++) {
    colSum[0][j] = grid[0][j];
    for (let i = 1; i < m; i++) {
      colSum[i][j] = colSum[i - 1][j] + grid[i][j];
    }
  }

  // enumerate edge lengths from largest to smallest
  for (let edge = Math.min(m, n); edge >= 2; edge--) {
    // enumerate the top-left corner position (i,j) of the square
    for (let i = 0; i + edge <= m; i++) {
      for (let j = 0; j + edge <= n; j++) {
        // calculate the standard value
        let stdSum = rowSum[i][j + edge - 1] - (j > 0 ? rowSum[i][j - 1] : 0);
        let check = true;
        // check each row
        for (let ii = i + 1; ii < i + edge; ii++) {
          let sum = rowSum[ii][j + edge - 1] - (j > 0 ? rowSum[ii][j - 1] : 0);
          if (sum !== stdSum) {
            check = false;
            break;
          }
        }
        if (!check) continue;
        // check each column
        for (let jj = j; jj < j + edge; jj++) {
          let sum = colSum[i + edge - 1][jj] - (i > 0 ? colSum[i - 1][jj] : 0);
          if (sum !== stdSum) {
            check = false;
            break;
          }
        }
        if (!check) continue;
        // check the diagonal
        let d1 = 0;
        let d2 = 0;
        for (let k = 0; k < edge; k++) {
          d1 += grid[i + k][j + k];
          d2 += grid[i + k][j + edge - 1 - k];
        }
        if (d1 === stdSum && d2 === stdSum) {
          return edge;
        }
      }
    }
  }
  return 1;
};

var grid = [
  [7, 1, 4, 5, 6],
  [2, 5, 1, 6, 4],
  [1, 5, 4, 3, 2],
  [1, 2, 7, 3, 4],
];
var expected = 3;
var result = largestMagicSquare(grid);
console.log(result, result === expected);

var grid = [
  [5, 1, 3, 1],
  [9, 3, 3, 1],
  [1, 3, 3, 8],
];
var expected = 2;
var result = largestMagicSquare(grid);
console.log(result, result === expected);
