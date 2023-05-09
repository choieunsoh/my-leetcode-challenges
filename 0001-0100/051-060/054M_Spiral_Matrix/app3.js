// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  while (matrix.length) {
    const curr = matrix.shift();
    result.push(...curr);
    for (const row of matrix) {
      const end = row.pop();
      if (end) {
        result.push(end);
        row.reverse();
      }
    }
    matrix.reverse();
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
console.log(result.join(' '), result.join() === expected.join());

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join() === expected.join());

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join() === expected.join());
