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
      const surfaceArea = grid[i][j] > 0 ? grid[i][j] * 4 + 2 : 0;
      const glue = countGlueSurfaces(grid, i, j);
      totalSurfaceArea += surfaceArea - glue;
    }
  }
  return totalSurfaceArea;
};
function countGlueSurfaces(grid, i, j) {
  let glueCount = 0;
  // up
  if (i - 1 >= 0) glueCount += Math.min(grid[i][j], grid[i - 1][j] ?? 0);
  // down
  if (i + 1 < grid.length)
    glueCount += Math.min(grid[i][j], grid[i + 1][j] ?? 0);
  // left
  if (j - 1 >= 0) glueCount += Math.min(grid[i][j], grid[i][j - 1] ?? 0);
  // right
  if (j + 1 < grid.length)
    glueCount += Math.min(grid[i][j], grid[i][j + 1] ?? 0);

  return glueCount;
}

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
