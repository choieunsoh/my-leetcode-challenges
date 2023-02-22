// 1572. Matrix Diagonal Sum
// https://leetcode.com/problems/matrix-diagonal-sum/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  const center = n >> 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[n - 1 - i][i];
  }
  return n & 1 ? sum - mat[center][center] : sum;
};

var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = 25;
var result = diagonalSum(mat);
console.log(result, result === expected);

var mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
var expected = 8;
var result = diagonalSum(mat);
console.log(result, result === expected);

var mat = [[5]];
var expected = 5;
var result = diagonalSum(mat);
console.log(result, result === expected);
