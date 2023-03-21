// 1020. Number of Enclaves
// https://leetcode.com/problems/number-of-enclaves/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let result = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [1, 0, -1, 0, 1];

  // Top - Bottom
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 1) dfs(0, col);
    if (grid[rows - 1][col] === 1) dfs(rows - 1, col);
  }
  // Left - Right
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 1) dfs(row, 0);
    if (grid[row][cols - 1] === 1) dfs(row, cols - 1);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) result++;
    }
  }
  return result;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) return;
    grid[r][c] = 2;
    for (let i = 0; i < 4; i++) {
      const [nr, nc] = [r + dir[i], c + dir[i + 1]];
      dfs(nr, nc);
    }
  }
};

var grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
var expected = 3;
var result = numEnclaves(grid);
grid.map((row) => console.log(row));
console.log(result, result === expected);

var grid = [
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
];
var expected = 0;
var result = numEnclaves(grid);
grid.map((row) => console.log(row));
console.log(result, result === expected);
