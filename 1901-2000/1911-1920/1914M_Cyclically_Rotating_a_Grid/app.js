// 1914. Cyclically Rotating a Grid
// https://leetcode.com/problems/cyclically-rotating-a-grid/description/
// T.C.: O(m * n)
// S.C.: O(m + n)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const nLayer = Math.min(Math.floor(m / 2), Math.floor(n / 2));
  for (let layer = 0; layer < nLayer; layer++) {
    const rows = [];
    const cols = [];
    const values = [];
    for (let i = layer; i < m - layer - 1; i++) {
      // left border
      rows.push(i);
      cols.push(layer);
      values.push(grid[i][layer]);
    }
    for (let j = layer; j < n - layer - 1; j++) {
      // bottom border
      rows.push(m - layer - 1);
      cols.push(j);
      values.push(grid[m - layer - 1][j]);
    }
    for (let i = m - layer - 1; i > layer; i--) {
      // right border
      rows.push(i);
      cols.push(n - layer - 1);
      values.push(grid[i][n - layer - 1]);
    }
    for (let j = n - layer - 1; j > layer; j--) {
      // top border
      rows.push(layer);
      cols.push(j);
      values.push(grid[layer][j]);
    }

    const total = values.length;
    const kk = k % total;
    for (let i = 0; i < total; i++) {
      const idx = (i + total - kk) % total;
      grid[rows[i]][cols[i]] = values[idx];
    }
  }
  return grid;
};

var grid = [
    [40, 10],
    [30, 20],
  ],
  k = 1;
var expected = [
  [10, 20],
  [40, 30],
];
var result = rotateGrid(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  k = 2;
var expected = [
  [3, 4, 8, 12],
  [2, 11, 10, 16],
  [1, 7, 6, 15],
  [5, 9, 13, 14],
];
var result = rotateGrid(grid, k);
console.log(result, result.join() === expected.join());
