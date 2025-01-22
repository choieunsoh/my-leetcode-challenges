// 2852. Sum of Remoteness of All Cells
// https://leetcode.com/problems/sum-of-remoteness-of-all-cells/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var sumRemoteness = function (grid) {
  const n = grid.length;
  const dirs = [0, 1, 0, -1, 0];
  let total = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === -1) continue;
      total += grid[row][col];
    }
  }

  let result = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === -1) continue;

      // arr[0] = sum of reachable cells
      // arr[1] = count of reachable cells
      const arr = [0, 0];
      dfs(row, col, arr);

      // For each reachable cell, add unreachable sum to result
      // unreachable sum = totalSum - sum of reachable cells
      result += (total - arr[0]) * arr[1];
    }
  }

  return result;

  function dfs(row, col, arr) {
    arr[0] += grid[row][col]; // Add current cell value to sum
    arr[1]++; // Increment reachable cells count
    grid[row][col] = -1; // Mark as visited

    // Explore all 4 directions
    for (let d = 0; d < 4; d++) {
      const newRow = row + dirs[d];
      const newCol = col + dirs[d + 1];
      if (isValid(newRow, newCol)) {
        dfs(newRow, newCol, arr);
      }
    }
  }

  function isValid(row, col) {
    return row >= 0 && col >= 0 && row < n && col < n && grid[row][col] > 0;
  }
};

var grid = [
  [-1, 1, -1],
  [5, -1, 4],
  [-1, 3, -1],
];
var expected = 39;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [-1, 3, 4],
  [-1, -1, -1],
  [3, -1, -1],
];
var expected = 13;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = 0;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [11, 3, 4],
  [-1, -1, -1],
  [3, -1, -1],
];
var expected = 27;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [3, 3, 3],
  [-1, -1, -1],
  [3, -1, 1],
];
var expected = 34;
var result = sumRemoteness(grid);
console.log(result, result === expected);
