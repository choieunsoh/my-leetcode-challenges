// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
// Rotate 180 = Reverse Column >> Reverse Row
var rotate = function (matrix: number[][]): void {
  const N = matrix.length;
  // reverse row
  matrix.forEach((row) => row.reverse());

  let top = 0;
  let bottom = N - 1;
  while (top < bottom) {
    for (let i = 0; i < N; i++) {
      [matrix[top][i], matrix[bottom][i]] = [matrix[bottom][i], matrix[top][i]];
    }
    top++;
    bottom--;
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
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
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
  [16, 12, 14, 15],
  [7, 6, 3, 13],
  [10, 8, 4, 2],
  [11, 9, 1, 5],
];
rotate(matrix);
printMatrix(matrix);
console.log(compareMatrix(expect, matrix));
