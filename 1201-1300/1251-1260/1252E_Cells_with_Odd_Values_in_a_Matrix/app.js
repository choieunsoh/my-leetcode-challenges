// 1252. Cells with Odd Values in a Matrix
// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
// T.C.: O(m*n+k)
// S.C.: O(m+n)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const oddRows = new Array(m).fill(false);
  const oddCols = new Array(n).fill(false);
  for (const [row, col] of indices) {
    oddRows[row] ^= true;
    oddCols[col] ^= true;
  }

  let result = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (oddRows[row] ^ oddCols[col]) {
        result++;
      }
    }
  }
  return result;
};

var m = 2,
  n = 3,
  indices = [
    [0, 1],
    [1, 1],
  ];
var expected = 6;
var result = oddCells(m, n, indices);
console.log(result, result === expected);

var m = 2,
  n = 2,
  indices = [
    [1, 1],
    [0, 0],
  ];
var expected = 0;
var result = oddCells(m, n, indices);
console.log(result, result === expected);
