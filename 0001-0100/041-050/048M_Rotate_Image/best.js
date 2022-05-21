/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0,
    right = matrix.length - 1;

  while (left < right) {
    let top = left,
      bottom = right;

    for (let i = 0; i < right - left; i++) {
      const topLeft = matrix[top][left + i];

      // move bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left];
      //move bottom right to bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];
      // move top right to bottom right
      matrix[bottom][right - i] = matrix[top + i][right];
      // move to top left to top right
      matrix[top + i][right] = topLeft;
    }

    left += 1;
    right -= 1;
  }
};

var compare = function (a, b) {
  return a.flat().join(' ') === b.flat().join(' ');
};

var print = function (matrix) {
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
print(matrix);
console.log(compare(expect, matrix));

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
print(matrix);
console.log(compare(expect, matrix));
