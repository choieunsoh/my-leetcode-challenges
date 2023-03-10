// 417. Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const d = [0, 1, 0, -1, 0];

  for (let col = 0; col < cols; col++) {
    dfs(0, col, heights[0][col], pacific);
    dfs(rows - 1, col, heights[rows - 1][col], atlantic);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, heights[row][0], pacific);
    dfs(row, cols - 1, heights[row][cols - 1], atlantic);
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

  function dfs(row, col, prevHeight, visited) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] || prevHeight > heights[row][col]) return;
    visited[row][col] = true;
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = [d[i], d[i + 1]];
      const [x, y] = [row + dx, col + dy];
      dfs(x, y, heights[row][col], visited);
    }
  }
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
console.log(result, result.join() === expected.join());

var heights = [[1]];
var expected = [[0, 0]];
var result = pacificAtlantic(heights);
console.log(result, result.join() === expected.join());
