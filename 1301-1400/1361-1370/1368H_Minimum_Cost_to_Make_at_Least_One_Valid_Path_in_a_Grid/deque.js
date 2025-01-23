// 1368. Minimum Cost to Make at Least One Valid Path in a Grid
// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const rows = grid.length;
  const cols = grid[0].length;
  const minCost = Array.from({ length: rows }, () => new Array(cols).fill(Number.MAX_SAFE_INTEGER));
  minCost[0][0] = 0;

  const deque = [[0, 0]];
  while (deque.length) {
    const [row, col] = deque.shift();

    // Try all four directions
    for (let dir = 0; dir < 4; dir++) {
      const newRow = row + dirs[dir][0];
      const newCol = col + dirs[dir][1];
      const cost = grid[row][col] !== dir + 1 ? 1 : 0;

      // If position is valid and we found a better path
      if (isValid(newRow, newCol) && minCost[row][col] + cost < minCost[newRow][newCol]) {
        minCost[newRow][newCol] = minCost[row][col] + cost;

        // Add to back if cost=1, front if cost=0
        if (cost === 1) {
          deque.push([newRow, newCol]);
        } else {
          deque.unshift([newRow, newCol]);
        }
      }
    }
  }

  return minCost[rows - 1][cols - 1];

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }
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
