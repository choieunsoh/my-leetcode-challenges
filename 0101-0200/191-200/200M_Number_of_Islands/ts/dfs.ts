// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
var numIslands = function (grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  function move(row: number, col: number): void {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === '0'
    )
      return;

    grid[row][col] = '0';
    move(row + 1, col);
    move(row - 1, col);
    move(row, col + 1);
    move(row, col - 1);
  }

  let islands = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        islands++;
        move(row, col);
      }
    }
  }

  return islands;
};

var grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
var expected = 1;
var result = numIslands(grid);
console.log(result, expected, result === expected);

var grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
var expected = 3;
var result = numIslands(grid);
console.log(result, expected, result === expected);
