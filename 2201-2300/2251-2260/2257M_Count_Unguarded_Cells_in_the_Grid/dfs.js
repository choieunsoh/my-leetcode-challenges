// 2257. Count Unguarded Cells in the Grid
// https://leetcode.com/problems/count-unguarded-cells-in-the-grid/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  const Cell = { GUARD: 2, WALL: 3, GUARDED: 1, UNGUARDED: 0 };
  const grid = Array.from({ length: m }, () => new Array(n).fill(0));
  for (const [r, c] of guards) {
    grid[r][c] = Cell.GUARD;
  }
  for (const [r, c] of walls) {
    grid[r][c] = Cell.WALL;
  }

  for (const [r, c] of guards) {
    dfs(r - 1, c, 'U'); // Up
    dfs(r + 1, c, 'D'); // Down
    dfs(r, c - 1, 'L'); // Left
    dfs(r, c + 1, 'R'); // Right
  }

  let count = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === Cell.UNGUARDED) count++;
    }
  }
  return count;

  function dfs(row, col, direction) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === Cell.GUARD ||
      grid[row][col] === Cell.WALL
    ) {
      return;
    }

    grid[row][col] = Cell.GUARDED; // Mark cell as guarded
    if (direction === 'U') dfs(row - 1, col, 'U'); // Up
    if (direction === 'D') dfs(row + 1, col, 'D'); // Down
    if (direction === 'L') dfs(row, col - 1, 'L'); // Left
    if (direction === 'R') dfs(row, col + 1, 'R'); // Right
  }
};

var m = 4,
  n = 6,
  guards = [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  walls = [
    [0, 1],
    [2, 2],
    [1, 4],
  ];
var expected = 7;
var result = countUnguarded(m, n, guards, walls);
console.log(result, result === expected);

var m = 3,
  n = 3,
  guards = [[1, 1]],
  walls = [
    [0, 1],
    [1, 0],
    [2, 1],
    [1, 2],
  ];
var expected = 4;
var result = countUnguarded(m, n, guards, walls);
console.log(result, result === expected);

var m = 2,
  n = 7,
  guards = [
    [1, 5],
    [1, 1],
    [1, 6],
    [0, 2],
  ],
  walls = [
    [0, 6],
    [0, 3],
    [0, 5],
  ];
var expected = 1;
var result = countUnguarded(m, n, guards, walls);
console.log(result, result === expected);
