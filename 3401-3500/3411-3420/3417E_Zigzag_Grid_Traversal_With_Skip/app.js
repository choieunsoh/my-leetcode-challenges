// 3417. Zigzag Grid Traversal With Skip
// https://leetcode.com/problems/zigzag-grid-traversal-with-skip/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = [];
  for (let row = 0; row < rows; row++) {
    if (row % 2 === 0) {
      for (let col = 0; col < cols; col += 2) {
        result.push(grid[row][col]);
      }
    } else {
      const startCol = (cols - 1) % 2 === 1 ? cols - 1 : cols - 2;
      for (let col = startCol; col > 0; col -= 2) {
        result.push(grid[row][col]);
      }
    }
  }
  return result;
};

var grid = [
  [1, 2],
  [3, 4],
];
var expected = [1, 4];
var result = zigzagTraversal(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [2, 1],
  [2, 1],
  [2, 1],
];
var expected = [2, 1, 2];
var result = zigzagTraversal(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 3, 5, 7, 9];
var result = zigzagTraversal(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [1, 2, 1, 3],
  [5, 15, 7, 3],
  [10, 4, 14, 12],
];
var expected = [1, 1, 3, 15, 10, 14];
var result = zigzagTraversal(grid);
console.log(result, result.join() === expected.join());
