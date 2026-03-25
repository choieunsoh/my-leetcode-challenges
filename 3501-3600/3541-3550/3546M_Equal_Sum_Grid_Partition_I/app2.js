// 3546. Equal Sum Grid Partition I
// https://leetcode.com/problems/equal-sum-grid-partition-i/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let total = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      total += grid[row][col];
    }
  }

  if (total % 2 !== 0) return false;

  const target = total / 2;

  let running = 0;
  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols; col++) {
      running += grid[row][col];
      if (running > target) break;
    }
    if (running === target) return true;
  }

  running = 0;
  for (let j = 0; j < cols - 1; j++) {
    for (let i = 0; i < rows; i++) {
      running += grid[i][j];
      if (running > target) break;
    }
    if (running === target) return true;
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
