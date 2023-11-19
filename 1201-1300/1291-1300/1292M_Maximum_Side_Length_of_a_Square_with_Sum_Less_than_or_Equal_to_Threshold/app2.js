// 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
// https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const rows = mat.length;
  const cols = mat[0].length;
  const maxSize = Math.min(rows, cols);
  for (let row = 1; row < rows; row++) {
    mat[row][0] += mat[row - 1][0];
  }
  for (let col = 1; col < cols; col++) {
    mat[0][col] += mat[0][col - 1];
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      mat[row][col] += mat[row - 1][col] + mat[row][col - 1] - mat[row - 1][col - 1];
    }
  }

  let result = 0;
  for (let size = 1; size <= maxSize; size++) {
    for (let row = 0; row <= rows - size; row++) {
      for (let col = 0; col <= cols - size; col++) {
        const [prevRow, prevCol] = [row - 1, col - 1];
        const [endRow, endCol] = [row + size - 1, col + size - 1];
        const top = mat[prevRow]?.[endCol] ?? 0;
        const left = mat[endRow][prevCol] ?? 0;
        const topLeft = mat[prevRow]?.[prevCol] ?? 0;
        const bottomRight = mat[endRow][endCol];
        const area = topLeft + bottomRight - top - left;
        if (area <= threshold) {
          result = Math.max(result, size);
          row = rows;
          col = cols;
        }
      }
    }
  }
  return result;
};

var mat = [
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
  ],
  threshold = 4;
var expected = 2;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ],
  threshold = 1;
var expected = 0;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  threshold = 6;
var expected = 3;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [5, 5, 1],
    [5, 5, 5],
    [5, 5, 5],
  ],
  threshold = 1;
var expected = 1;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);
