// 3195. Find the Minimum Area to Cover All Ones I
// https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let minRow = rows - 1;
  let maxRow = 0;
  let minCol = cols - 1;
  let maxCol = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        minRow = Math.min(minRow, row);
        maxRow = Math.max(maxRow, row);
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);
      }
    }
  }
  return (maxRow - minRow + 1) * (maxCol - minCol + 1);
};

var grid = [
  [0, 1, 0],
  [1, 0, 1],
];
var expected = 6;
var result = minimumArea(grid);
console.log(result, result === expected);

var grid = [
  [1, 0],
  [0, 0],
];
var expected = 1;
var result = minimumArea(grid);
console.log(result, result === expected);
