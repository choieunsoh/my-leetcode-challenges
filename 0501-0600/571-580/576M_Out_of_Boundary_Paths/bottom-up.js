// 576. Out of Boundary Paths
// https://leetcode.com/problems/out-of-boundary-paths/description/
// T.C.: O(m * n * N)
// S.C.: O(m * n)
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
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[startRow][startColumn] = 1;
  let count = 0;
  for (let move = 1; move <= maxMove; move++) {
    const curr = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === m - 1) count = (count + dp[i][j]) % MOD;
        if (i === 0) count = (count + dp[i][j]) % MOD;
        if (j === n - 1) count = (count + dp[i][j]) % MOD;
        if (j === 0) count = (count + dp[i][j]) % MOD;
        const left = dp[i][j - 1] ?? 0;
        const right = dp[i][j + 1] ?? 0;
        const up = dp[i - 1]?.[j] ?? 0;
        const down = dp[i + 1]?.[j] ?? 0;
        curr[i][j] = (left + right + up + down) % MOD;
      }
    }
    dp = curr;
  }
  return count;
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
