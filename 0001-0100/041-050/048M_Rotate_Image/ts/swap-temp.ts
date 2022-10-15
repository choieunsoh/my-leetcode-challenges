// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix: number[][]): void {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    let top = left;
    let bottom = right;
    for (let i = 0; i < right - left; i++) {
      const topLeft = matrix[top][left + i];
      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }
    left++;
    right--;
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
