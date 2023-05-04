// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    let [top, bottom] = [left, right];
    for (let i = 0; i < right - left; i++) {
      const topLeft = matrix[top][left + i];
      // TopLeft << BottomLeft
      matrix[top][left + i] = matrix[bottom - i][left];
      // BottomLeft << BottomRight
      matrix[bottom - i][left] = matrix[bottom][right - i];
      // BottomRight << TopRight
      matrix[bottom][right - i] = matrix[top + i][right];
      // TopRight << TopLeft
      matrix[top + i][right] = topLeft;
    }
    left++;
    right--;
  }
};

var compare = function (a, b) {
  return a.flat().join(' ') === b.flat().join(' ');
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
rotate(matrix);
matrix.map((row) => console.log(row));
console.log(matrix.join() === expected.join());

var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
var expected = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
rotate(matrix);
matrix.map((row) => console.log(row));
console.log(matrix.join() === expected.join());
