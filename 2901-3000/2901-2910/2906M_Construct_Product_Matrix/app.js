// 2906. Construct Product Matrix
// https://leetcode.com/problems/construct-product-matrix/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function (grid) {
  const MOD = 12345;
  const m = grid.length;
  const n = grid[0].length;
  const p = Array.from({ length: m }, () => new Array(n).fill(0));

  let suffix = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      p[i][j] = suffix;
      suffix = (suffix * grid[i][j]) % MOD;
    }
  }

  let prefix = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      p[i][j] = (p[i][j] * prefix) % MOD;
      prefix = (prefix * grid[i][j]) % MOD;
    }
  }

  return p;
};

var grid = [
  [1, 2],
  [3, 4],
];
var expected = [
  [24, 12],
  [8, 6],
];
var result = constructProductMatrix(grid);
console.log(result, result.join() === expected.join());

var grid = [[12345], [2], [1]];
var expected = [[2], [0], [0]];
var result = constructProductMatrix(grid);
console.log(result, result.join() === expected.join());
