// 1463. Cherry Pickup II
// https://leetcode.com/problems/cherry-pickup-ii/description/
// T.C.: O(M*N^2)
// S.C.: O(M*N^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const memo = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(n)));
  return dp(0, 0, n - 1, grid, memo);

  function dp(row, col1, col2, grid, memo) {
    if (col1 < 0 || col1 >= grid[0].length || col2 < 0 || col2 >= grid[0].length) {
      return 0;
    }

    if (memo[row][col1][col2] !== undefined) {
      return memo[row][col1][col2];
    }

    let result = grid[row][col1];
    if (col1 !== col2) {
      result += grid[row][col2];
    }
    if (row !== grid.length - 1) {
      let max = 0;
      for (let newCol1 = col1 - 1; newCol1 <= col1 + 1; newCol1++) {
        for (let newCol2 = col2 - 1; newCol2 <= col2 + 1; newCol2++) {
          max = Math.max(max, dp(row + 1, newCol1, newCol2, grid, memo));
        }
      }
      result += max;
    }
    memo[row][col1][col2] = result;
    return result;
  }
};

var grid = [
  [3, 1, 1],
  [2, 5, 1],
  [1, 5, 5],
  [2, 1, 1],
];
var expected = 24;
var result = cherryPickup(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 0, 3, 0],
  [2, 0, 9, 0, 0, 0, 0],
  [0, 3, 0, 5, 4, 0, 0],
  [1, 0, 2, 3, 0, 0, 6],
];
var expected = 28;
var result = cherryPickup(grid);
console.log(result, result === expected);
