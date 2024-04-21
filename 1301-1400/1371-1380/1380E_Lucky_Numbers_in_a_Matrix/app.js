// 1380. Lucky Numbers in a Matrix
// https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let row = 0; row < rows; row++) {
    let minCol = -1;
    let minInRow = Infinity;
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] < minInRow) {
        minInRow = matrix[row][col];
        minCol = col;
      }
    }
    if (matrix.every((row) => row[minCol] <= minInRow)) return [minInRow];
  }

  return [];
};

var matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];
var expected = [15];
var result = luckyNumbers(matrix);
console.log(result, result.join() === expected.join());

var matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];
var expected = [12];
var result = luckyNumbers(matrix);
console.log(result, result.join() === expected.join());
