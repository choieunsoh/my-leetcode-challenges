// https://leetcode.com/problems/island-perimeter/
// 463. Island Perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        perimeter += dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
      return 1;
    }
    if (grid[i][j] === -1) return 0;
    grid[i][j] = -1;

    let count = dfs(i + 1, j);
    count += dfs(i - 1, j);
    count += dfs(i, j + 1);
    count += dfs(i, j - 1);
    return count;
  }

  return perimeter;
};

var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
var expected = 16;
console.log(islandPerimeter(grid), expected);

var grid = [[1]];
var expected = 4;
console.log(islandPerimeter(grid), expected);

var grid = [[1, 0]];
var expected = 4;
console.log(islandPerimeter(grid), expected);
