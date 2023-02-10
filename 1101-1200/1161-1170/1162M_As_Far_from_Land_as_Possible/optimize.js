// 1162. As Far from Land as Possible
// https://leetcode.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let distance = -1;
  const m = grid.length;
  const n = grid[0].length;
  const max = m * n + 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = max;
        const up = grid[i - 1]?.[j] ?? max;
        const left = grid[i][j - 1] ?? max;
        grid[i][j] = Math.min(grid[i][j], up + 1, left + 1);
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const down = grid[i + 1]?.[j] ?? max;
      const right = grid[i][j + 1] ?? max;
      grid[i][j] = Math.min(grid[i][j], down + 1, right + 1);

      distance = Math.max(distance, grid[i][j]);
    }
  }

  return distance === 0 || distance === max ? -1 : distance;
};

var grid = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
var expected = 2;
var result = maxDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 4;
var result = maxDistance(grid);
console.log(result, result === expected);
