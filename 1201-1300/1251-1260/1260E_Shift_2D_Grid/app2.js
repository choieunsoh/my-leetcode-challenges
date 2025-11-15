// 1260. Shift 2D Grid
// https://leetcode.com/problems/shift-2d-grid/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const flatGrid = grid.flat();

  k = k % (m * n);

  const shifted = flatGrid.slice(-k).concat(flatGrid.slice(0, -k));

  const newGrid = [];
  for (let i = 0; i < m; i++) {
    newGrid.push(shifted.slice(i * n, (i + 1) * n));
  }

  return newGrid;
};

var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
var expected = [
  [9, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13],
  ],
  k = 4;
var expected = [
  [12, 0, 21, 13],
  [3, 8, 1, 9],
  [19, 7, 2, 5],
  [4, 6, 11, 10],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 9;
var expected = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [[1], [2], [3], [4], [7], [6], [5]],
  k = 23;
var expected = [[6], [5], [1], [2], [3], [4], [7]];
var result = shiftGrid(grid, k);
console.log(result, result.join() === expected.join());
