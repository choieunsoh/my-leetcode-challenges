/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    for (let col = row; col < n - row - 1; col++) {
      swap(row, col, col, n - 1 - row);
      swap(row, col, n - 1 - row, n - 1 - col);
      swap(row, col, n - 1 - col, row);
    }
  }

  function swap(r1, c1, r2, c2) {
    [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]];
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
