/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  const visited = new Set();
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  dfs(0, 0, 0);

  function dfs(row, col, index) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== index) return;
    const cell = row * rows + col;
    if (visited.has(cell)) return;
    visited.add(cell);

    for (const [r, c] of dir) {
      const nr = row + r;
      const nc = col + c;
      dfs(nr, nc, index + 1);
    }
  }

  return visited.size === rows * cols;
};

var grid = [
  [0, 11, 16, 5, 20],
  [17, 4, 19, 10, 15],
  [12, 1, 8, 21, 6],
  [3, 18, 23, 14, 9],
  [24, 13, 2, 7, 22],
];
var expected = true;
var result = checkValidGrid(grid);
console.log(result, result === expected);

var grid = [
  [0, 3, 6],
  [5, 8, 1],
  [2, 7, 4],
];
var expected = false;
var result = checkValidGrid(grid);
console.log(result, result === expected);

var grid = [
  [0, 13, 1, 7, 20],
  [3, 8, 19, 12, 15],
  [18, 2, 14, 21, 6],
  [9, 4, 23, 16, 11],
  [24, 17, 10, 5, 22],
];
var expected = false;
var result = checkValidGrid(grid);
console.log(result, result === expected);
