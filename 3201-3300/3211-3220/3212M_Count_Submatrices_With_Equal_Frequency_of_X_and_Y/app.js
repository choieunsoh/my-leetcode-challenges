// 3212. Count Submatrices With Equal Frequency of X and Y
// https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const sumX = new Array(cols).fill(0);
  const sumY = new Array(cols).fill(0);
  let result = 0;

  for (let i = 0; i < rows; i++) {
    let rowX = 0;
    let rowY = 0;
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'X') {
        rowX++;
      } else if (grid[i][j] === 'Y') {
        rowY++;
      }

      sumX[j] += rowX;
      sumY[j] += rowY;

      if (sumX[j] > 0 && sumX[j] === sumY[j]) {
        result++;
      }
    }
  }

  return result;
};

var grid = [
  ['X', 'Y', '.'],
  ['Y', '.', '.'],
];
var expected = 3;
var result = numberOfSubmatrices(grid);
console.log(result, result === expected);

var grid = [
  ['X', 'X'],
  ['X', 'Y'],
];
var expected = 0;
var result = numberOfSubmatrices(grid);
console.log(result, result === expected);

var grid = [
  ['.', '.'],
  ['.', '.'],
];
var expected = 0;
var result = numberOfSubmatrices(grid);
console.log(result, result === expected);
