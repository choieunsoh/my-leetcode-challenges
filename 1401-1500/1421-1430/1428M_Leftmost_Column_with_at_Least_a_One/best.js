// 1428. Leftmost Column with at Least a One
// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/
// T.C.: O(n + m)
// S.C.: O(1)
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let row = 0;
  let col = cols - 1;
  while (col >= 0 && row < rows) {
    if (binaryMatrix.get(row, col)) {
      col--;
    } else {
      row++;
    }
  }
  return col === cols - 1 ? -1 : col + 1;
};

function BinaryMatrix(mat) {
  this.mat = mat;

  this.get = function (row, col) {
    return this.mat[row][col];
  };

  this.dimensions = function () {
    return [this.mat.length, this.mat[0].length];
  };
}

var mat = [
  [0, 0],
  [1, 1],
];
var expected = 0;
var result = leftMostColumnWithOne(new BinaryMatrix(mat));
console.log(result, result === expected);

var mat = [
  [0, 0],
  [0, 1],
];
var expected = 1;
var result = leftMostColumnWithOne(new BinaryMatrix(mat));
console.log(result, result === expected);

var mat = [
  [0, 0],
  [0, 0],
];
var expected = -1;
var result = leftMostColumnWithOne(new BinaryMatrix(mat));
console.log(result, result === expected);

var mat = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
var expected = 0;
var result = leftMostColumnWithOne(new BinaryMatrix(mat));
console.log(result, result === expected);
