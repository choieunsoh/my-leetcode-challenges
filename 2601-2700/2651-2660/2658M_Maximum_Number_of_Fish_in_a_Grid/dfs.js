// 2658. Maximum Number of Fish in a Grid
// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  let maxFish = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) continue;
      maxFish = Math.max(maxFish, dfs(row, col));
    }
  }
  return maxFish;

  function dfs(row, col) {
    if (grid[row][col] === 0) return 0;

    let fish = grid[row][col];
    grid[row][col] = 0;

    if (row - 1 >= 0) fish += dfs(row - 1, col);
    if (row + 1 < rows) fish += dfs(row + 1, col);
    if (col - 1 >= 0) fish += dfs(row, col - 1);
    if (col + 1 < cols) fish += dfs(row, col + 1);

    return fish;
  }
};

var grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
var expected = 7;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];
var expected = 1;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [8, 6],
  [2, 6],
];
var expected = 22;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [0, 5],
  [8, 4],
];
var expected = 17;
var result = findMaxFish(grid);
console.log(result, result === expected);
