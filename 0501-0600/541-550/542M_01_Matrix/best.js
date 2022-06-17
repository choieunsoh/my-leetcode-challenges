// https://leetcode.com/problems/01-matrix/
// 542. 01 Matrix
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const MAX = m + n;

  // top > bottom, left > right: ;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 0) {
        continue;
      }
      let top = MAX;
      let left = MAX;
      if (c > 0) {
        left = mat[r][c - 1];
      }
      if (r > 0) {
        top = mat[r - 1][c];
      }
      mat[r][c] = Math.min(left, top) + 1;
    }
  }

  // bottom > top, right > left
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      if (mat[r][c] === 0) {
        continue;
      }
      let right = MAX;
      let bottom = MAX;
      if (c < n - 1) {
        right = mat[r][c + 1];
      }
      if (r < m - 1) {
        bottom = mat[r + 1][c];
      }
      mat[r][c] = Math.min(mat[r][c], Math.min(right, bottom) + 1);
    }
  }

  return mat;
};

var mat = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var expected = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var result = updateMatrix(mat);
console.log(result.join(' '), expected.join(' ') === result.join(' '));

var mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
var expected = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1],
];
var result = updateMatrix(mat);
console.log(result.join(' '), expected.join(' ') === result.join(' '));
