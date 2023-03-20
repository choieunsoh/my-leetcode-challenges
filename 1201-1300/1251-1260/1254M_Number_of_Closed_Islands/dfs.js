// 1254. Number of Closed Islands
// https://leetcode.com/problems/number-of-closed-islands/description/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let closedIslands = 0;
  const dir = [1, 0, -1, 0, 1];
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] === 0) {
        if (dfs(i, j)) {
          closedIslands++;
        }
      }
    }
  }
  return closedIslands;

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (grid[i][j] > 0) return true;
    grid[i][j] = 2;

    let valid = true;
    for (let k = 0; k < 4; k++) {
      const [x, y] = [i + dir[k], j + dir[k + 1]];
      valid &= dfs(x, y);
    }
    return valid;
  }
};

var grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
var expected = 2;
var result = closedIsland(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
];
var expected = 1;
var result = closedIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
var expected = 2;
var result = closedIsland(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
];
var expected = 5;
var result = closedIsland(grid);
console.log(result, result === expected);
