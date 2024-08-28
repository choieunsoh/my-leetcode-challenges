// 1905. Count Sub Islands
// https://leetcode.com/problems/count-sub-islands/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let subIslands = 0;
  const rows = grid1.length;
  const cols = grid1[0].length;
  const directions = [0, 1, 0, -1, 0];
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (visited[row][col] || !isLand(grid2, row, col) || !isSubIsland(row, col)) continue;

      subIslands++;
    }
  }

  return subIslands;

  function isLand(grid, i, j) {
    return grid[i][j] === 1;
  }

  function isSubIsland(i, j) {
    let isSubIsland = true;
    let queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length) {
      const nextQueue = [];
      for (const [row, col] of queue) {
        if (!isLand(grid1, row, col)) {
          isSubIsland = false;
        }

        for (let k = 0; k < 4; k++) {
          const [nextRow, nextCol] = [row + directions[k], col + directions[k + 1]];
          if (!isValidCell(grid2, nextRow, nextCol)) continue;

          nextQueue.push([nextRow, nextCol]);
          visited[nextRow][nextCol] = true;
        }
      }
      queue = nextQueue;
    }
    return isSubIsland;
  }

  function isValidCell(grid, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
    if (visited[row][col] || !isLand(grid, row, col)) return false;
    return true;
  }
};

var grid1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ],
  grid2 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ];
var expected = 3;
var result = countSubIslands(grid1, grid2);
console.log(result, result === expected);

var grid1 = [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
  ],
  grid2 = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ];
var expected = 2;
var result = countSubIslands(grid1, grid2);
console.log(result, result === expected);
