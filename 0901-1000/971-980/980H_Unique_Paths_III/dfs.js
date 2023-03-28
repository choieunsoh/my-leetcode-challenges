// 980. Unique Paths III
// https://leetcode.com/problems/unique-paths-iii/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let paths = 0;
  let emptyCount = 0;
  let startRow = -1;
  let startCol = -1;
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) emptyCount++;
      if (grid[r][c] === 1) [startRow, startCol] = [r, c];
    }
  }

  dfs(grid, startRow, startCol, 0);

  function dfs(grid, r, c, count) {
    for (const [i, j] of dir) {
      const row = r + i;
      const col = c + j;
      if (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols &&
        grid[row][col] !== 3
      ) {
        if (grid[row][col] === 0) {
          grid[row][col] = 3;
          dfs(grid, row, col, count + 1);
          grid[row][col] = 0;
        }
        if (grid[row][col] === 2 && count === emptyCount) {
          paths++;
        }
      }
    }
  }

  return paths;
};

var grid = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
];
var expected = 2;
var result = uniquePathsIII(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 2],
];
var expected = 4;
var result = uniquePathsIII(grid);
console.log(result, result === expected);

var grid = [
  [0, 1],
  [2, 0],
];
var expected = 0;
var result = uniquePathsIII(grid);
console.log(result, result === expected);
