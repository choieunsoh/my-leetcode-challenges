// 931. Minimum Falling Path Sum
// https://leetcode.com/problems/minimum-falling-path-sum/
// T.C.: O(n^2)
// T.C.: O(n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = matrix.length;
  let dp = new Array(n).fill(0);
  for (let row = n - 1; row >= 0; row--) {
    const currDp = new Array(n);
    for (let col = 0; col < n; col++) {
      const left = dp?.[col - 1] ?? MAX;
      const middle = dp?.[col];
      const right = dp?.[col + 1] ?? MAX;
      currDp[col] = Math.min(left, middle, right) + matrix[row][col];
    }
    dp = currDp;
  }
  return Math.min(...dp);
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
