// 2319. Check if Matrix Is X-Matrix
// https://leetcode.com/problems/check-if-matrix-is-x-matrix/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};

var grid = [
  [2, 0, 0, 1],
  [0, 3, 1, 0],
  [0, 5, 2, 0],
  [4, 0, 0, 2],
];
var expected = true;
var result = checkXMatrix(grid);
console.log(result, result === expected);

var grid = [
  [5, 7, 0],
  [0, 3, 1],
  [0, 5, 0],
];
var expected = false;
var result = checkXMatrix(grid);
console.log(result, result === expected);
