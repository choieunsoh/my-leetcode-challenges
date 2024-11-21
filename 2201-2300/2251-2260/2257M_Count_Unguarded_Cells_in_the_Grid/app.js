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
    for (let i = r - 1; i >= 0; i--) {
      if (grid[i][c] === Cell.WALL || grid[i][c] === Cell.GUARD) break;
      grid[i][c] = Cell.GUARDED;
    }

    for (let i = r + 1; i < m; i++) {
      if (grid[i][c] === Cell.WALL || grid[i][c] === Cell.GUARD) break;
      grid[i][c] = Cell.GUARDED;
    }

    for (let i = c - 1; i >= 0; i--) {
      if (grid[r][i] === Cell.WALL || grid[r][i] === Cell.GUARD) break;
      grid[r][i] = Cell.GUARDED;
    }

    for (let i = c + 1; i < n; i++) {
      if (grid[r][i] === Cell.WALL || grid[r][i] === Cell.GUARD) break;
      grid[r][i] = Cell.GUARDED;
    }
  }

  let count = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === Cell.UNGUARDED) count++;
    }
  }
  return count;
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
