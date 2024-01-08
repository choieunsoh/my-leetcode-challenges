// 1428. Leftmost Column with at Least a One
// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/
// T.C.: O(n log m)
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
  let leftMostCol = cols;
  for (let row = 0; row < rows; row++) {
    const col = findLeftMostOne(row);
    leftMostCol = Math.min(leftMostCol, col);
  }
  return leftMostCol === cols ? -1 : leftMostCol;

  function findLeftMostOne(row) {
    let left = 0;
    let right = cols - 1;
    let leftMostCol = cols;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (binaryMatrix.get(row, mid)) {
        leftMostCol = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return leftMostCol;
  }
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
