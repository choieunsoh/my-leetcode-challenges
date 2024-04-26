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
  const memo = Array.from({ length: n }, () => new Array(n).fill(MAX));

  for (let col = 0; col < n; col++) {
    memo[n - 1][col] = grid[n - 1][col];
  }

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      let nextMin = MAX;
      for (let nextRowCol = 0; nextRowCol < n; nextRowCol++) {
        if (nextRowCol === col) continue;
        nextMin = Math.min(nextMin, memo[row + 1][nextRowCol]);
      }
      memo[row][col] = grid[row][col] + nextMin;
    }
  }

  return Math.min(...memo[0]);
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
