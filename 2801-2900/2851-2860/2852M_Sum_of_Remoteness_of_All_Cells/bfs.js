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
      if (grid[row][col] > 0) {
        result += bfs(row, col);
      }
    }
  }

  return result;

  function bfs(row, col) {
    let compSum = grid[row][col]; // Sum of values in current component
    let compSize = 1; // Number of cells in component
    grid[row][col] = -1; // Mark as visited

    const queue = [];
    queue.push([row, col]);

    while (queue.length) {
      const [r, c] = queue.shift();
      // Explore all 4 directions
      for (let d = 0; d < 4; d++) {
        const newRow = dirs[d] + r;
        const newCol = dirs[d + 1] + c;
        if (isValid(newRow, newCol)) {
          queue.push([newRow, newCol]);
          compSum += grid[newRow][newCol];
          compSize++;
          grid[newRow][newCol] = -1; // Mark as visited
        }
      }
    }
    // Return remoteness value for this component
    return (total - compSum) * compSize;
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
