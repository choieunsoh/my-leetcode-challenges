// 304. Range Sum Query 2D - Immutable
// https://leetcode.com/problems/range-sum-query-2d-immutable/
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ps = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      ps[i][j] = matrix[i - 1][j - 1] + ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
    }
  }
  this.ps = ps;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.ps[row2 + 1][col2 + 1] - this.ps[row1][col2 + 1] - this.ps[row2 + 1][col1] + this.ps[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
var obj = new NumMatrix(matrix);
var regions = [
  [2, 1, 4, 3, 8],
  [1, 1, 2, 2, 11],
  [1, 2, 2, 4, 12],
];
for (const [row1, col1, row2, col2, expected] of regions) {
  var result = obj.sumRegion(row1, col1, row2, col2);
  console.log(result, expected, result === expected);
}
