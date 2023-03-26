// sudoku2
// LC-36: https://leetcode.com/problems/valid-sudoku/
/**
 * @param {grid[][]} grid
 * @return {boolean}
 */
function sudoku2(grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();
    for (let j = 0; j < n; j++) {
      const rowVal = grid[i][j];
      const colVal = grid[j][i];
      const r = 3 * ((i / 3) | 0) + ((j / 3) | 0);
      const c = 3 * (i % 3) + (j % 3);
      const boxVal = grid[r][c];
      if (rowVal !== '.' && rows.has(rowVal)) return false;
      if (rowVal !== '.') rows.add(rowVal);

      if (colVal !== '.' && cols.has(colVal)) return false;
      if (colVal !== '.') cols.add(colVal);

      if (boxVal !== '.' && boxes.has(boxVal)) return false;
      if (boxVal !== '.') boxes.add(boxVal);
    }
  }
  return true;
}

var grid = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.'],
];
var expected = true;
var result = sudoku2(grid);
console.log(result, result === expected);

var grid = [
  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '.', '3', '.', '.', '.', '.'],
];
var expected = false;
var result = sudoku2(grid);
console.log(result, result === expected);
