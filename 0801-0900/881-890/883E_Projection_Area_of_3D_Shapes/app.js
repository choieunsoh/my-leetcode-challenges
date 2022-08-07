// https://leetcode.com/problems/projection-area-of-3d-shapes/
// 883. Projection Area of 3D Shapes
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let area = 0;
  const N = grid.length;
  for (let row = 0; row < N; row++) {
    let maxRowArea = 0;
    let maxColArea = 0;
    for (let col = 0; col < N; col++) {
      if (grid[row][col] > 0) area++;
      maxRowArea = Math.max(maxRowArea, grid[row][col]);
      maxColArea = Math.max(maxColArea, grid[col][row]);
    }
    area += maxRowArea + maxColArea;
  }
  return area;
};

var grid = [
  [1, 2],
  [3, 4],
];
var expected = 17;
var actual = projectionArea(grid);
console.log(actual, actual === expected);

var grid = [[2]];
var expected = 5;
var actual = projectionArea(grid);
console.log(actual, actual === expected);

var grid = [
  [1, 0],
  [0, 2],
];
var expected = 8;
var actual = projectionArea(grid);
console.log(actual, actual === expected);
