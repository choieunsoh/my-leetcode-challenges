// 542. 01 Matrix
// https://leetcode.com/problems/01-matrix/
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  const MAX = m + n;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) continue;
      const top = mat[i - 1]?.[j] ?? MAX;
      const left = mat[i][j - 1] ?? MAX;
      mat[i][j] = Math.min(top, left) + 1;
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;
      const bottom = mat[i + 1]?.[j] ?? MAX;
      const right = mat[i][j + 1] ?? MAX;
      const min = Math.min(bottom, right) + 1;
      mat[i][j] = Math.min(mat[i][j], min);
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
result.map((row) => console.log(row));
console.log(expected.join() === result.join());

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
result.map((row) => console.log(row));
console.log(expected.join() === result.join());
