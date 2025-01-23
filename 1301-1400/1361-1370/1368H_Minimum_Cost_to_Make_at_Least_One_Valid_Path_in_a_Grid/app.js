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

  // Queue for BFS part - stores cells that need cost increment
  const queue = [];

  // Start DFS from origin with cost 0
  let cost = 0;
  dfs(0, 0, cost);

  // BFS part - process cells level by level with increasing cost
  while (queue.length) {
    cost++;
    let levelSize = queue.length;

    while (levelSize-- > 0) {
      const [row, col] = queue.shift();

      // Try all 4 directions for next level
      for (let dir = 0; dir < 4; dir++) {
        dfs(row + dirs[dir][0], col + dirs[dir][1], cost);
      }
    }
  }

  return minCost[rows - 1][cols - 1];

  // DFS to explore all reachable cells with current cost
  function dfs(row, col, cost) {
    if (!isValid(row, col)) return;

    minCost[row][col] = cost;
    queue.push([row, col]);

    // Follow the arrow direction without cost increase
    const nextDir = grid[row][col] - 1;
    dfs(row + dirs[nextDir][0], col + dirs[nextDir][1], cost);
  }

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && minCost[row][col] === Number.MAX_SAFE_INTEGER;
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
