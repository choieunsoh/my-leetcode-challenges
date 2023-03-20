// 695. Max Area of Island
// https://leetcode.com/problems/max-area-of-island/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const dir = [1, 0, -1, 0, 1];
  const rows = grid.length;
  const cols = grid[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        const area = dfs(r, c);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;

  function isValid(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 1;
  }
  function dfs(r, c) {
    if (!isValid(r, c)) return 0;
    grid[r][c] = 2;
    let area = 1;
    for (let i = 0; i < 4; i++) {
      const [nr, nc] = [r + dir[i], c + dir[i + 1]];
      area += dfs(nr, nc);
    }
    return area;
  }
};

var grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
var expected = 6;
var result = maxAreaOfIsland(grid);
console.log(result, result === expected);

var grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
var expected = 0;
var result = maxAreaOfIsland(grid);
console.log(result, result === expected);
