// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
// Rotate Right = Transpose > Reverse
var rotate = function (matrix: number[][]): void {
  const N = matrix.length;
  // transpose matrix
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse matrix
  matrix.forEach((row) => row.reverse());
};

// Rotate Left = Reverse > Transpose
var rotateLeft = function (matrix: number[][]): void {
  const N = matrix.length;
  // reverse matrix
  matrix.forEach((row) => row.reverse());

  // transpose matrix
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
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
