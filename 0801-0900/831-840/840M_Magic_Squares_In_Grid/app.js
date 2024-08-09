// 840. Magic Squares In Grid
// https://leetcode.com/problems/magic-squares-in-grid/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (rows < 3 || cols < 3) return 0;

  let count = 0;
  for (let row = 1; row + 1 < rows; row++) {
    for (let col = 1; col + 1 < cols; col++) {
      if (isMagicSquare(row, col)) count++;
    }
  }
  return count;

  function isMagicSquare(row, col) {
    const SUM = 15;
    const seen = new Array(10).fill(false);
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        const num = grid[i][j];
        if (num < 1 || num > 9 || seen[num]) return false;
        seen[num] = true;
      }
    }

    const diagonal1 = grid[row - 1][col - 1] + grid[row][col] + grid[row + 1][col + 1];
    if (diagonal1 !== SUM) return false;

    const diagonal2 = grid[row - 1][col + 1] + grid[row][col] + grid[row + 1][col - 1];
    if (diagonal2 !== SUM) return false;

    const row1 = grid[row - 1][col - 1] + grid[row - 1][col] + grid[row - 1][col + 1];
    if (row1 !== SUM) return false;

    const row2 = grid[row][col - 1] + grid[row][col] + grid[row][col + 1];
    if (row2 !== SUM) return false;

    const row3 = grid[row + 1][col - 1] + grid[row + 1][col] + grid[row + 1][col + 1];
    if (row3 !== SUM) return false;

    const col1 = grid[row - 1][col - 1] + grid[row][col - 1] + grid[row + 1][col - 1];
    if (col1 !== SUM) return false;

    const col2 = grid[row - 1][col] + grid[row][col] + grid[row + 1][col];
    if (col2 !== SUM) return false;

    const col3 = grid[row - 1][col + 1] + grid[row][col + 1] + grid[row + 1][col + 1];
    if (col3 !== SUM) return false;

    return true;
  }
};

var grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];
var expected = 1;
var result = numMagicSquaresInside(grid);
console.log(result, result === expected);

var grid = [[8]];
var expected = 0;
var result = numMagicSquaresInside(grid);
console.log(result, result === expected);

var grid = [
  [4, 3, 8, 4, 3, 8],
  [9, 5, 1, 9, 5, 1],
  [2, 7, 6, 2, 7, 6],
];
var expected = 2;
var result = numMagicSquaresInside(grid);
console.log(result, result === expected);
