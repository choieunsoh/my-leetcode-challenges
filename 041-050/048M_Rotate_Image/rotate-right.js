/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // reverse
  matrix.forEach((rows) => rows.reverse());

  // transpose
  const n = matrix.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      [matrix[i][j], matrix[n - j][n - i]] = [
        matrix[n - j][n - i],
        matrix[i][j],
      ];
    }
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
