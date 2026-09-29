// 2267. Check if There Is a Valid Parentheses String Path
// https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/description/
// T.C.: O(n * m * (n + m))
// S.C.: O(n * m * (n + m))
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const pathLen = n + m - 1;

  if (pathLen % 2 === 1) {
    return false;
  }
  if (grid[0][0] !== '(' || grid[n - 1][m - 1] !== ')') {
    return false;
  }

  const dp = Array.from({ length: n }, () => new Array(m).fill(0n));
  dp[0][0] = 1n << 1n;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      const change = grid[i][j] === '(' ? 1 : -1;

      if (i > 0) {
        if (change === 1) {
          dp[i][j] |= dp[i - 1][j] << 1n;
        } else {
          dp[i][j] |= dp[i - 1][j] >> 1n;
        }
      }

      if (j > 0) {
        if (change === 1) {
          dp[i][j] |= dp[i][j - 1] << 1n;
        } else {
          dp[i][j] |= dp[i][j - 1] >> 1n;
        }
      }
    }
  }

  return (dp[n - 1][m - 1] & 1n) !== 0n;
};

var grid = [
  ['(', '(', '('],
  [')', '(', ')'],
  ['(', '(', ')'],
  ['(', '(', ')'],
];
var expected = true;
var result = hasValidPath(grid);
console.log(result, result === expected);

var grid = [
  [')', ')'],
  ['(', '('],
];
var expected = false;
var result = hasValidPath(grid);
console.log(result, result === expected);
