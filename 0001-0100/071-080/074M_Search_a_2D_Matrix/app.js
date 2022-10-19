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
  let left = 0;
  let right = rows * cols - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const midValue = matrix[row][col];
    if (midValue === target) return true;
    target > midValue ? (left = mid + 1) : (right = mid - 1);
  }

  return false;
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
