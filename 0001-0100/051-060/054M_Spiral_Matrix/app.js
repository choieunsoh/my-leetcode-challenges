// https://leetcode.com/problems/spiral-matrix/
// 54. Spiral Matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const total = matrix.length * matrix[0].length;
  const result = [];

  let [up, down, left, right] = [0, matrix.length - 1, 0, matrix[0].length - 1];
  while (result.length < total) {
    for (let i = left; i <= right; i++) {
      if (result.length === total) return result;
      result.push(matrix[up][i]);
    }
    up++;

    for (let i = up; i <= down; i++) {
      if (result.length === total) return result;
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left; i--) {
      if (result.length === total) return result;
      result.push(matrix[down][i]);
    }
    down--;

    for (let i = down; i >= up; i--) {
      if (result.length === total) return result;
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));
