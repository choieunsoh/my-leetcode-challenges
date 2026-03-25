// 3546. Equal Sum Grid Partition I
// https://leetcode.com/problems/equal-sum-grid-partition-i/description/
// T.C.: O(n*m)
// S.C.: O(n+m)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let total = 0;
  const rowSum = new Array(rows).fill(0);
  const colSum = new Array(cols).fill(0);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rowSum[row] += grid[row][col];
      colSum[col] += grid[row][col];
      total += grid[row][col];
    }
  }

  for (let row = 1; row < rows; row++) {
    rowSum[row] += rowSum[row - 1];
  }
  for (let col = 1; col < cols; col++) {
    colSum[col] += colSum[col - 1];
  }

  for (const sum of rowSum) {
    if (2 * sum === total) return true;
  }
  for (const sum of colSum) {
    if (2 * sum === total) return true;
  }

  return false;
};

var grid = [
  [1, 4],
  [2, 3],
];
var expected = true;
var result = canPartitionGrid(grid);
console.log(result, result === expected);

var grid = [
  [1, 3],
  [2, 4],
];
var expected = false;
var result = canPartitionGrid(grid);
console.log(result, result === expected);
