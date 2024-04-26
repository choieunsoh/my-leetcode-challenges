// 1289. Minimum Falling Path Sum II
// https://leetcode.com/problems/minimum-falling-path-sum-ii/description/
// T.C.: O(n ^ 3)
// S.C.: O(n ^ 2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  const MAX = Number.MAX_SAFE_INTEGER;
  const memo = Array.from({ length: n }, () => new Array(n));

  let result = MAX;
  for (let col = 0; col < n; col++) {
    result = Math.min(result, dfs(0, col));
  }
  return result;

  function dfs(row, col) {
    if (row === n - 1) return grid[row][col];
    if (memo[row][col] !== undefined) return memo[row][col];

    let nextMin = MAX;
    for (let nextCol = 0; nextCol < n; nextCol++) {
      if (nextCol === col) continue;
      nextMin = Math.min(nextMin, dfs(row + 1, nextCol));
    }

    memo[row][col] = grid[row][col] + nextMin;
    return memo[row][col];
  }
};

var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = 13;
var result = minFallingPathSum(grid);
console.log(result, result === expected);

var grid = [[7]];
var expected = 7;
var result = minFallingPathSum(grid);
console.log(result, result === expected);
