// 2371. Minimize Maximum Value in a Grid
// https://leetcode.com/problems/minimize-maximum-value-in-a-grid/description/
// T.C.: O((m*n) log (m*n))
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var minScore = function (grid) {
  const stack = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      stack.push([grid[row][col], row, col]);
    }
  }

  // sort the stack. You want to place the lowest value first
  stack.sort((a, b) => b[0] - a[0]);

  // keep track of the max num in the current row and col
  const rowMax = new Array(grid.length).fill(0);
  const colMax = new Array(grid[0].length).fill(0);

  while (stack.length) {
    const [, row, col] = stack.pop();

    // grid[row][col] will be the max of row and col + 1
    grid[row][col] = Math.max(rowMax[row], colMax[col]) + 1;

    // update row and col max
    rowMax[row] = grid[row][col];
    colMax[col] = grid[row][col];
  }

  return grid;
};

var grid = [
  [3, 1],
  [2, 5],
];
var expected = [
  [2, 1],
  [1, 2],
];
var result = minScore(grid);
console.log(result, result.join() === expected.join());

var grid = [[10]];
var expected = [[1]];
var result = minScore(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [3, 1, 9, 4],
  [2, 5, 10, 12],
];
var expected = [
  [2, 1, 4, 3],
  [1, 2, 5, 6],
];
var result = minScore(grid);
console.log(result, result.join() === expected.join());
