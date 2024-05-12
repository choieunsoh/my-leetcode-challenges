// 2373. Largest Local Values in a Matrix
// https://leetcode.com/problems/largest-local-values-in-a-matrix/description/
// T.C.: O(n ^ 2)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const result = Array.from({ length: n - 2 }, () => new Array(n - 2));
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let max = 0;
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          max = Math.max(max, grid[x][y]);
        }
      }
      result[i - 1][j - 1] = max;
    }
  }
  return result;
};

var grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];
var expected = [
  [9, 9],
  [8, 6],
];
var result = largestLocal(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
var expected = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];
var result = largestLocal(grid);
console.log(result, result.join() === expected.join());
