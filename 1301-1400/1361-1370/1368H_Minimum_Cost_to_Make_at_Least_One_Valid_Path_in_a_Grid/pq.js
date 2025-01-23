// 1368. Minimum Cost to Make at Least One Valid Path in a Grid
// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/
// Dijkstra's Algorithm
// T.C.: O(m*n*log(m*n))
// S.C.: O(m*n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
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

  const pq = new MinPriorityQueue({ priority: (cell) => cell.cost });
  pq.enqueue({ row: 0, col: 0, cost: 0 });
  while (!pq.isEmpty()) {
    const { cost, row, col } = pq.dequeue().element;

    // Skip if we've found a better path to this cell
    if (minCost[row][col] !== cost) continue;

    for (let dir = 0; dir < 4; dir++) {
      const newRow = row + dirs[dir][0];
      const newCol = col + dirs[dir][1];
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;

      const newCost = cost + (dir !== grid[row][col] - 1 ? 1 : 0);
      if (minCost[newRow][newCol] > newCost) {
        minCost[newRow][newCol] = newCost;
        pq.enqueue({ cost: newCost, row: newRow, col: newCol });
      }
    }
  }

  return minCost[rows - 1][cols - 1];
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
