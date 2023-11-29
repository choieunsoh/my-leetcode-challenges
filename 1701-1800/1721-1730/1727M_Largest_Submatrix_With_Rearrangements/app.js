// 1727. Largest Submatrix With Rearrangements
// https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let prevHeights = [];
  let result = 0;

  for (let row = 0; row < rows; row++) {
    const heights = [];
    const seen = new Array(cols).fill(false);

    for (const pair of prevHeights) {
      const [height, col] = pair;
      if (matrix[row][col] === 1) {
        heights.push([height + 1, col]);
        seen[col] = true;
      }
    }

    for (let col = 0; col < cols; col++) {
      if (!seen[col] && matrix[row][col] === 1) {
        heights.push([1, col]);
      }
    }

    for (let i = 0; i < heights.length; i++) {
      result = Math.max(result, heights[i][0] * (i + 1));
    }

    prevHeights = heights;
  }

  return result;
};

var matrix = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
];
var expected = 4;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);

var matrix = [[1, 0, 1, 0, 1]];
var expected = 3;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 1, 0],
  [1, 0, 1],
];
var expected = 2;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);
