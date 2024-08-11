// 1568. Minimum Number of Days to Disconnect Island
// https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/
// T.C.: O((m*n)^2)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [1, 0, -1, 0, 1];

  const initialIslandCount = countIslands(grid);
  console.log(initialIslandCount);
  if (initialIslandCount !== 1) {
    return 0;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) continue;
      grid[row][col] = 0;

      const islandCount = countIslands(grid);
      if (islandCount !== 1) return 1;

      grid[row][col] = 1;
    }
  }

  return 2;

  function countIslands(grid) {
    let count = 0;
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 0 || visited[row][col]) continue;
        dfs(row, col, visited);
        count++;
      }
    }

    return count;
  }

  function dfs(row, col, visited) {
    visited[row][col] = true;
    for (let d = 0; d < 4; d++) {
      const [newRow, newCol] = [row + dir[d], col + dir[d + 1]];
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        visited[newRow][newCol] ||
        grid[newRow][newCol] === 0
      )
        continue;
      dfs(newRow, newCol, visited);
    }
  }
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
