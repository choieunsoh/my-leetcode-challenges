// 1568. Minimum Number of Days to Disconnect Island
// https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const dirs = [-1, 0, 1, 0, -1]; // 4-way movement helper
  const n = grid.length;
  const m = grid[0].length; // We use increasing turns to track
  let total = 0;
  let result = 2;

  function dfs(i, j, from = -3, turn = 2) {
    total++;
    grid[i][j] *= turn; // Keep track of total land & use grid
    let preRes = 1e9;
    let postRes = 1e9; //   to keep track of visited lands

    // Navigate four directions,
    for (let d = 0; d < 4; d++)
      if (d !== (from + 2) % 4) {
        // but ignore previous land,
        let x = i + dirs[d];
        let y = j + dirs[d + 1]; //   since we're looking for a cycle
        if (~x && ~y && x < n && y < m)
          if (grid[x][y] === 1) {
            // postRes is result *after* next move
            postRes = Math.min(postRes, dfs(x, y, d, turn + 1));
          } else if (grid[x][y] > 1) {
            // preRes is result *before* next move
            preRes = Math.min(preRes, grid[x][y]);
          }
      }
    if (
      (preRes === 1e9 && postRes == 1e9) || // Dead end ("leaf node") land
      (turn > 2 && postRes < 1e9 && postRes >= turn)
    ) {
      // Articulation point: more lands, but
      result = 1; //   no path back to before this land
    }

    return Math.min(preRes, postRes);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        if (total) return 0; // If this is a second island, return 0
        dfs(i, j); // Otherwise, run DFS helper
      }
    }
  }

  return total < 3 ? total : result; // Deals w/ edge case for tiny/no island
};

var grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
var expected = 2;
var result = minDays(grid);
console.log(result, result === expected);

var grid = [[1, 1]];
var expected = 2;
var result = minDays(grid);
console.log(result, result === expected);

var grid = [[1, 0, 1, 0]];
var expected = 0;
var result = minDays(grid);
console.log(result, result === expected);
