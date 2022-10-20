// 417. Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));
  const atlantic = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));

  for (let col = 0; col < cols; col++) {
    dfs(0, col, rows, cols, pacific, heights[0][col], heights);
    dfs(rows - 1, col, rows, cols, atlantic, heights[rows - 1][col], heights);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, rows, cols, pacific, heights[row][0], heights);
    dfs(row, cols - 1, rows, cols, atlantic, heights[row][cols - 1], heights);
  }

  function dfs(row, col, rows, cols, visited, prevHeight, heights) {
    const invalidRow = row < 0 || row >= rows;
    if (invalidRow) return;

    const invalidCol = col < 0 || col >= cols;
    if (invalidCol) return;

    const currentHeight = heights[row][col];
    const invalidHeight = visited[row][col] || currentHeight < prevHeight;
    if (invalidHeight) return;

    visited[row][col] = true;
    dfs(row - 1, col, rows, cols, visited, currentHeight, heights);
    dfs(row + 1, col, rows, cols, visited, currentHeight, heights);
    dfs(row, col - 1, rows, cols, visited, currentHeight, heights);
    dfs(row, col + 1, rows, cols, visited, currentHeight, heights);
  }

  const result = [];
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
