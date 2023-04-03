// 1314. Matrix Block Sum
// https://leetcode.com/problems/matrix-block-sum/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const ps = Array.from({ length: m }, () => Array(n).fill(0));
  ps[0][0] = mat[0][0];
  for (let r = 1; r < m; r++) {
    ps[r][0] = mat[r][0] + ps[r - 1][0];
  }
  for (let c = 1; c < n; c++) {
    ps[0][c] = mat[0][c] + ps[0][c - 1];
  }
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      ps[r][c] = mat[r][c] + ps[r - 1][c] + ps[r][c - 1] - ps[r - 1][c - 1];
    }
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const i = Math.min(r + k, m - 1);
      const j = Math.min(c + k, n - 1);
      const top = ps[r - k - 1]?.[j] ?? 0;
      const left = ps[i][c - k - 1] ?? 0;
      const topLeft = ps[r - k - 1]?.[c - k - 1] ?? 0;
      const current = ps[i][j] ?? ps[m - 1][n - 1];
      mat[r][c] = current - top - left + topLeft;
    }
  }

  return mat;
};

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
var expected = [
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28],
];
var result = matrixBlockSum(mat, k);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 2;
var expected = [
  [45, 45, 45],
  [45, 45, 45],
  [45, 45, 45],
];
var result = matrixBlockSum(mat, k);
console.log(result, result.join() === expected.join());
