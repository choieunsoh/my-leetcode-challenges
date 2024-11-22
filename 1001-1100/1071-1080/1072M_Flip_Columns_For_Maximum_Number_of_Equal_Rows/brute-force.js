// 1072. Flip Columns For Maximum Number of Equal Rows
// https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/description/
// T.C.: O(m^2*n)
// S.C.: O(n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  let maxMatch = 0;
  const cols = matrix[0].length;
  for (const row of matrix) {
    let match = 0;
    let num = row.join('');
    let flipped = '';
    for (let i = 0; i < cols; i++) {
      flipped += String(1 - row[i]);
    }
    for (const row2 of matrix) {
      const num2 = row2.join('');
      if (num2 === num.toString(2) || num2 === flipped.toString(2)) {
        match++;
      }
    }
    maxMatch = Math.max(maxMatch, match);
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
