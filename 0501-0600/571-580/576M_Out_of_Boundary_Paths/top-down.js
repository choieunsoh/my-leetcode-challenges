// 576. Out of Boundary Paths
// https://leetcode.com/problems/out-of-boundary-paths/description/
// T.C.: O(m * n * N)
// S.C.: O(m * n * N)
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(maxMove + 1)));
  solve(m, n, maxMove, startRow, startColumn, memo);
  return memo[startRow][startColumn][maxMove] ?? 0;

  function solve(m, n, move, row, column, memo) {
    if (row < 0 || row >= m || column < 0 || column >= n) {
      return 1;
    }
    if (move === 0) {
      return 0;
    }
    if (memo[row][column][move] !== undefined) {
      return memo[row][column][move];
    }

    const left = solve(m, n, move - 1, row, column - 1, memo) % MOD;
    const right = solve(m, n, move - 1, row, column + 1, memo) % MOD;
    const up = solve(m, n, move - 1, row - 1, column, memo) % MOD;
    const down = solve(m, n, move - 1, row + 1, column, memo) % MOD;
    const count = (((left + right) % MOD) + ((up + down) % MOD)) % MOD;
    return (memo[row][column][move] = count);
  }
};

var m = 2,
  n = 2,
  maxMove = 2,
  startRow = 0,
  startColumn = 0;
var expected = 6;
var result = findPaths(m, n, maxMove, startRow, startColumn);
console.log(result, result === expected);

var m = 1,
  n = 3,
  maxMove = 3,
  startRow = 0,
  startColumn = 1;
var expected = 12;
var result = findPaths(m, n, maxMove, startRow, startColumn);
console.log(result, result === expected);
