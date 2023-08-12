// 85. Maximal Rectangle
// https://leetcode.com/problems/maximal-rectangle/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rows = matrix.length;
  if (rows === 0) return 0;

  const cols = matrix[0].length;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  let maxArea = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0) {
        dp[row][col] = Number(matrix[row][col]);
      } else {
        dp[row][col] = matrix[row][col] === '1' ? dp[row - 1][col] + 1 : 0;
      }

      let minHeight = dp[row][col];
      for (let c = col; c >= 0; c--) {
        if (minHeight === 0) break;
        if (dp[row][c] < minHeight) minHeight = dp[row][c];
        maxArea = Math.max(maxArea, minHeight * (col - c + 1));
      }
    }
  }
  return maxArea;
};

var matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
var expected = 6;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [['0']];
var expected = 0;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [['1']];
var expected = 1;
var result = maximalRectangle(matrix);
console.log(result, result === expected);

var matrix = [
  ['0', '1'],
  ['1', '0'],
];
var expected = 1;
var result = maximalRectangle(matrix);
console.log(result, result === expected);
