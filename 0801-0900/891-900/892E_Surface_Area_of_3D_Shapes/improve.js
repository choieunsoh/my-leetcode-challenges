// https://leetcode.com/problems/surface-area-of-3d-shapes/
// 892. Surface Area of 3D Shapes
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let totalSurfaceArea = 0;
  const N = grid.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) totalSurfaceArea += grid[i][j] * 4 + 2;
      if (i > 0) totalSurfaceArea -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
      if (j > 0) totalSurfaceArea -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
    }
  }
  return totalSurfaceArea;
};

var grid = [
  [1, 2],
  [3, 4],
];
var expected = 34;
var result = surfaceArea(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
var expected = 32;
var result = surfaceArea(grid);
console.log(result, result === expected);

var grid = [
  [2, 2, 2],
  [2, 1, 2],
  [2, 2, 2],
];
var expected = 46;
var result = surfaceArea(grid);
console.log(result, result === expected);
