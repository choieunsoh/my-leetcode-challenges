// 240. Search a 2D Matrix II
// https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  function dfs(row, col) {
    if (row < 0 || row >= m || col < 0 || col >= n) return false;
    if (matrix[row][col] > target) return false;
    if (matrix[row][col] === target) return true;

    if (dfs(row, col + 1)) return true;
    if (dfs(row + 1, col)) return true;

    return false;
  }

  return dfs(0, 0);
};

var matrix = [[-5]],
  target = -5;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, result === expected);

var matrix = [[1, 1]],
  target = 1;
var expected = true;
var result = searchMatrix(matrix, target);
console.log(result, result === expected);

var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5,
  expected = true;
var result = searchMatrix(matrix, target);
console.log(result, result === expected);

var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 20,
  expected = false;
var result = searchMatrix(matrix, target);
console.log(result, result === expected);
