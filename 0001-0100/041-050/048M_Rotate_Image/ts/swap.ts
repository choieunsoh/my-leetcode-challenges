// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix: number[][]): void {
  const N = matrix.length;
  for (let row = 0; row < N / 2; row++) {
    for (let col = row; col < N - 1 - row; col++) {
      swap(row, col, col, N - 1 - row);
      swap(row, col, N - 1 - row, N - 1 - col);
      swap(row, col, N - 1 - col, row);
    }
  }

  function swap(r1: number, c1: number, r2: number, c2: number) {
    [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]];
  }
};

var compareMatrix = function (a: number[][], b: number[][]) {
  return a.flat().join(' ') === b.flat().join(' ');
};

var printMatrix = function (matrix: number[][]) {
  matrix.forEach((rows) => console.log(rows.join(' ')));
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expect = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
rotate(matrix);
printMatrix(matrix);
console.log(compareMatrix(expect, matrix));

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
expect = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
rotate(matrix);
printMatrix(matrix);
console.log(compareMatrix(expect, matrix));
