// 329. Longest Increasing Path in a Matrix
// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 1 && n === 1) return 1;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  const d = [0, 1, 0, -1, 0];

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  return max;

  function dfs(i, j) {
    if (dp[i][j]) return dp[i][j];
    let steps = 0;
    for (let k = 0; k < 4; k++) {
      const [ni, nj] = [i + d[k], j + d[k + 1]];
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
        steps = Math.max(steps, dfs(ni, nj));
      }
    }
    return (dp[i][j] = steps + 1);
  }
};

var matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];
var expected = 4;
var result = longestIncreasingPath(matrix);
console.log(result, result === expected);

var matrix = [
  [3, 4, 5],
  [3, 2, 6],
  [2, 2, 1],
];
var expected = 4;
var result = longestIncreasingPath(matrix);
console.log(result, result === expected);

var matrix = [[1]];
var expected = 1;
var result = longestIncreasingPath(matrix);
console.log(result, result === expected);
