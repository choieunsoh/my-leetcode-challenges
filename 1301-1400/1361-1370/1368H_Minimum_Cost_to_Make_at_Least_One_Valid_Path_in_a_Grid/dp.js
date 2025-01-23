// 1368. Minimum Cost to Make at Least One Valid Path in a Grid
// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/
// T.C.: O((m*n)^2)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const minChanges = Array.from({ length: rows }, () => new Array(cols).fill(Number.MAX_SAFE_INTEGER));
  minChanges[0][0] = 0;

  while (true) {
    const prevState = structuredClone(minChanges);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (row > 0) {
          minChanges[row][col] = Math.min(
            minChanges[row][col],
            minChanges[row - 1][col] + (grid[row - 1][col] === 3 ? 0 : 1)
          );
        }
        if (col > 0) {
          minChanges[row][col] = Math.min(
            minChanges[row][col],
            minChanges[row][col - 1] + (grid[row][col - 1] === 1 ? 0 : 1)
          );
        }
      }
    }

    for (let row = rows - 1; row >= 0; row--) {
      for (let col = cols - 1; col >= 0; col--) {
        if (row < rows - 1) {
          minChanges[row][col] = Math.min(
            minChanges[row][col],
            minChanges[row + 1][col] + (grid[row + 1][col] === 4 ? 0 : 1)
          );
        }
        if (col < cols - 1) {
          minChanges[row][col] = Math.min(
            minChanges[row][col],
            minChanges[row][col + 1] + (grid[row][col + 1] === 2 ? 0 : 1)
          );
        }
      }
    }

    if (JSON.stringify(prevState) === JSON.stringify(minChanges)) {
      break;
    }
  }

  return minChanges[rows - 1][cols - 1];
};

var grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
var expected = 3;
var result = minCost(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 3],
  [3, 2, 2],
  [1, 1, 4],
];
var expected = 0;
var result = minCost(grid);
console.log(result, result === expected);

var grid = [
  [1, 2],
  [4, 3],
];
var expected = 1;
var result = minCost(grid);
console.log(result, result === expected);
