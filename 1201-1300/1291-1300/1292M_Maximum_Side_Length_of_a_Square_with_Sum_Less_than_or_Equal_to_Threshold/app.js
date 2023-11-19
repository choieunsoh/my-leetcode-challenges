// 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
// https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const rows = mat.length;
  const cols = mat[0].length;
  const maxSize = Math.min(rows, cols);
  const ps = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      ps[i][j] = ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }

  let result = 0;
  for (let size = maxSize; size > 0; size--) {
    for (let row1 = 0; row1 <= rows - size; row1++) {
      for (let col1 = 0; col1 <= cols - size; col1++) {
        const [row2, col2] = [row1 + size, col1 + size];
        const top = ps[row1][col2];
        const left = ps[row2][col1];
        const topLeft = ps[row1][col1];
        const bottomRight = ps[row2][col2];
        const area = topLeft + bottomRight - top - left;
        if (area <= threshold) {
          result = Math.max(result, size);
          row1 = rows;
          col1 = cols;
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
