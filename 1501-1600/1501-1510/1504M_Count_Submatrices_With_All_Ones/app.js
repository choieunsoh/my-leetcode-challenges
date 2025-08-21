// 1504. Count Submatrices With All Ones
// https://leetcode.com/problems/count-submatrices-with-all-ones/description/
// T.C.: O(m^2 * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let count = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] !== 0) {
        mat[row][col] = (mat[row][col - 1] ?? 0) + 1;
        let min = mat[row][col];
        for (let i = row; i >= 0; i--) {
          min = Math.min(min, mat[i][col]);
          if (min === 0) break;
          count += min;
        }
      }
    }
  }
  return count;
};

var mat = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 13;
var result = numSubmat(mat);
console.log(result, result === expected);

var mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
];
var expected = 24;
var result = numSubmat(mat);
console.log(result, result === expected);
