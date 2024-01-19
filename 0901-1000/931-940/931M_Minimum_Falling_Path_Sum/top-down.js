// 931. Minimum Falling Path Sum
// https://leetcode.com/problems/minimum-falling-path-sum/
// T.C.: O(n^2)
// T.C.: O(n^2)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const memo = Array.from({ length: n }, () => new Array(n));
  let result = Number.MAX_SAFE_INTEGER;
  for (let col = 0; col < n; col++) {
    result = Math.min(result, dp(matrix, 0, col, memo));
  }
  return result;

  function dp(matrix, row, col, memo) {
    if (col < 0 || col === matrix.length) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (row === matrix.length - 1) {
      return matrix[row][col];
    }
    if (memo[row][col] !== undefined) {
      return memo[row][col];
    }

    const left = dp(matrix, row + 1, col - 1, memo);
    const middle = dp(matrix, row + 1, col, memo);
    const right = dp(matrix, row + 1, col + 1, memo);
    return (memo[row][col] = Math.min(left, middle, right) + matrix[row][col]);
  }
};

var matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
var expected = 13;
var result = minFallingPathSum(matrix);
console.log(result, result === expected);

var matrix = [
  [-19, 57],
  [-40, -5],
];
var expected = -59;
var result = minFallingPathSum(matrix);
console.log(result, result === expected);
