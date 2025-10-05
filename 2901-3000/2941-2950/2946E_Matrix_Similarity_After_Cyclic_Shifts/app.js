// 2946. Matrix Similarity After Cyclic Shifts
// https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const rows = mat.length;
  const cols = mat[0].length;
  k %= cols;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // shift left
      if (row % 2 === 0) {
        if (mat[row][col] !== mat[row][(col + k) % cols]) {
          return false;
        }
      } else {
        // shift right
        if (mat[row][col] !== mat[row][(col - k + cols) % cols]) {
          return false;
        }
      }
    }
  }
  return true;
};

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 4;
var expected = false;
var result = areSimilar(mat, k);
console.log(result, result === expected);

var mat = [
    [1, 2, 1, 2],
    [5, 5, 5, 5],
    [6, 3, 6, 3],
  ],
  k = 2;
var expected = true;
var result = areSimilar(mat, k);
console.log(result, result === expected);

var mat = [
    [2, 2],
    [2, 2],
  ],
  k = 3;
var expected = true;
var result = areSimilar(mat, k);
console.log(result, result === expected);
