// 3127. Make a Square with the Same Color
// https://leetcode.com/problems/make-a-square-with-the-same-color/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols - 1; col++) {
      let whiteCells = grid[row][col] === 'W' ? 1 : 0;
      whiteCells += grid[row][col + 1] === 'W' ? 1 : 0;
      whiteCells += grid[row + 1][col] === 'W' ? 1 : 0;
      whiteCells += grid[row + 1][col + 1] === 'W' ? 1 : 0;
      if (whiteCells !== 2) {
        return true;
      }
    }
  }
  return false;
};

var grid = [
  ['B', 'W', 'B'],
  ['B', 'W', 'W'],
  ['B', 'W', 'B'],
];
var expected = true;
var result = canMakeSquare(grid);
console.log(result, result === expected);

var grid = [
  ['B', 'W', 'B'],
  ['W', 'B', 'W'],
  ['B', 'W', 'B'],
];
var expected = false;
var result = canMakeSquare(grid);
console.log(result, result === expected);

var grid = [
  ['B', 'W', 'B'],
  ['B', 'W', 'W'],
  ['B', 'W', 'W'],
];
var expected = true;
var result = canMakeSquare(grid);
console.log(result, result === expected);
