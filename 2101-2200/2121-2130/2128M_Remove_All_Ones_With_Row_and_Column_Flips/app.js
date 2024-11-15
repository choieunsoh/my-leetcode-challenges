// 2128. Remove All Ones With Row and Column Flips
// https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const firstRow = grid[0];
  for (let row = 1; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][0] === firstRow[0]) {
        if (grid[row][col] !== firstRow[col]) return false;
      } else {
        if (grid[row][col] !== 1 - firstRow[col]) return false;
      }
    }
  }
  return true;
};

var grid = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
var expected = true;
var result = removeOnes(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = false;
var result = removeOnes(grid);
console.log(result, result === expected);

var grid = [[0]];
var expected = true;
var result = removeOnes(grid);
console.log(result, result === expected);
