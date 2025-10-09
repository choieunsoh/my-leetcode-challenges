// 2639. Find the Width of Columns of a Grid
// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const result = [];
  const rows = grid.length;
  const cols = grid[0].length;
  for (let col = 0; col < cols; col++) {
    let maxLen = 0;
    for (let row = 0; row < rows; row++) {
      const len = grid[row][col].toString().length;
      maxLen = Math.max(maxLen, len);
    }
    result.push(maxLen);
  }
  return result;
};

var grid = [[1], [22], [333]];
var expected = [3];
var result = findColumnWidth(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [-15, 1, 3],
  [15, 7, 12],
  [5, 6, -2],
];
var expected = [3, 1, 2];
var result = findColumnWidth(grid);
console.log(result, result.join() === expected.join());
