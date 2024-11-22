// 1072. Flip Columns For Maximum Number of Equal Rows
// https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  let maxMatch = 0;
  const cols = matrix[0].length;
  const counts = new Map();
  for (const row of matrix) {
    let num = 0;
    let flipped = 0;
    for (let i = 0; i < cols; i++) {
      num += row[i] << i;
      flipped += (1 - row[i]) << i;
    }
    counts.set(num, (counts.get(num) || 0) + 1);
    counts.set(flipped, (counts.get(flipped) || 0) + 1);
    maxMatch = Math.max(maxMatch, counts.get(num), counts.get(flipped));
  }
  return maxMatch;
};

var matrix = [
  [0, 1],
  [1, 1],
];
var expected = 1;
var result = maxEqualRowsAfterFlips(matrix);
console.log(result, result === expected);

var matrix = [
  [0, 1],
  [1, 0],
];
var expected = 2;
var result = maxEqualRowsAfterFlips(matrix);
console.log(result, result === expected);

var matrix = [
  [0, 0, 0],
  [0, 0, 1],
  [1, 1, 0],
];
var expected = 2;
var result = maxEqualRowsAfterFlips(matrix);
console.log(result, result === expected);
