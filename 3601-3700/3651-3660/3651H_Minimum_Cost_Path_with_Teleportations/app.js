// 3651. Minimum Cost Path with Teleportations
// https://leetcode.com/problems/minimum-cost-path-with-teleportations/description/
// T.C.: O(mn (k + log mn))
// S.C.: O(mn)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const points = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      points.push([i, j]);
    }
  }
  points.sort((a, b) => grid[a[0]][a[1]] - grid[b[0]][b[1]]);

  const costs = Array.from({ length: m }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
  for (let t = 0; t <= k; t++) {
    let minCost = Number.MAX_SAFE_INTEGER;
    for (let i = 0, j = 0; i < points.length; i++) {
      minCost = Math.min(minCost, costs[points[i][0]][points[i][1]]);
      if (i + 1 < points.length && grid[points[i][0]][points[i][1]] === grid[points[i + 1][0]][points[i + 1][1]]) {
        continue;
      }
      for (let r = j; r <= i; r++) {
        costs[points[r][0]][points[r][1]] = minCost;
      }
      j = i + 1;
    }

    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (i === m - 1 && j === n - 1) {
          costs[i][j] = 0;
          continue;
        }
        if (i !== m - 1) {
          costs[i][j] = Math.min(costs[i][j], costs[i + 1][j] + grid[i + 1][j]);
        }
        if (j !== n - 1) {
          costs[i][j] = Math.min(costs[i][j], costs[i][j + 1] + grid[i][j + 1]);
        }
      }
    }
  }
  return costs[0][0];
};

var grid = [
    [1, 3, 3],
    [2, 5, 4],
    [4, 3, 5],
  ],
  k = 2;
var expected = 7;
var result = minCost(grid, k);
console.log(result, result === expected);

var grid = [
    [1, 2],
    [2, 3],
    [3, 4],
  ],
  k = 1;
var expected = 9;
var result = minCost(grid, k);
console.log(result, result === expected);
