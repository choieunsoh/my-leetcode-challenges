// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function findRow(left, right, target) {
    let row = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const value = matrix[mid][cols - 1];
      if (value >= target) {
        row = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return row;
  }
  function binarySearch(row, left, right, target) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      const value = matrix[row][mid];
      if (value === target) return true;
      if (value > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }

  const row = findRow(0, rows - 1, target);
  if (row === -1) return false;

  return binarySearch(row, 0, cols - 1, target);
};

var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);

var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 13;
var expected = false;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);

var matrix = [[1, 1]],
  target = 2;
var expected = false;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);

var matrix = [[1, 3, 5]],
  target = 3;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);

var matrix = [[1], [3], [5]],
  target = 3;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);

var matrix = [[1]],
  target = 1;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, expected, result === expected);
