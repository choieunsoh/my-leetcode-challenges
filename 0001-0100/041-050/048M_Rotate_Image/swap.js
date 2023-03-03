// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} m
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (m) {
  const n = m.length;
  for (let i = 0; i < n / 2; i++) {
    const x = n - i - 1;
    for (let j = i; j < x; j++) {
      const y = n - j - 1;
      swap(i, j, j, x);
      swap(i, j, x, y);
      swap(i, j, y, i);
    }
  }

  function swap(r1, c1, r2, c2) {
    [m[r1][c1], m[r2][c2]] = [m[r2][c2], m[r1][c1]];
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
