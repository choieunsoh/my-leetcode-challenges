// https://leetcode.com/problems/search-a-2d-matrix-ii/
// 240. Search a 2D Matrix II
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let [x, y] = [0, matrix[0].length - 1];
  while (x < matrix.length && y >= 0) {
    if (matrix[x][y] === target) return true;
    matrix[x][y] > target ? y-- : x++;
  }
  return false;
};

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
console.log(result, expected);

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
console.log(result, expected);
