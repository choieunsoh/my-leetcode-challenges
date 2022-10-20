// 417. Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/
var pacificAtlantic = function (heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));
  const atlantic = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let col = 0; col < cols; col++) {
    dfs(pacific, heights[0][col], 0, col);
    dfs(atlantic, heights[rows - 1][col], rows - 1, col);
  }
  for (let row = 0; row < rows; row++) {
    dfs(pacific, heights[row][0], row, 0);
    dfs(atlantic, heights[row][cols - 1], row, cols - 1);
  }

  function dfs(
    visited: boolean[][],
    prevHeight: number,
    row: number,
    col: number
  ): void {
    if (row < 0 || row >= rows) return;
    if (col < 0 || col >= cols) return;
    if (visited[row][col]) return;
    if (prevHeight > heights[row][col]) return;

    visited[row][col] = true;

    for (let i = 0; i < dirs.length; i++) {
      const [x, y] = dirs[i];
      dfs(visited, heights[row][col], row + x, col + y);
    }
  }

  const result: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }
  return result;
};

var heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
var expected = [
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 2],
  [3, 0],
  [3, 1],
  [4, 0],
];
var result = pacificAtlantic(heights);
console.log(result.join(), result.join() === expected.join());

var heights = [[1]];
var expected = [[0, 0]];
var result = pacificAtlantic(heights);
console.log(result.join(), result.join() === expected.join());
