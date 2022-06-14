// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  function move(x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return 0;
    if (grid[x][y] === '0') return 0;

    // visited
    grid[x][y] = '0';

    // down
    move(x + 1, y);
    // up
    move(x - 1, y);
    // left
    move(x, y - 1);
    // right
    move(x, y + 1);

    return 1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      count += move(i, j);
    }
  }

  return count;
};

var grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
var expected = 1;
console.log(numIslands(grid), expected);

var grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
var expected = 3;
console.log(numIslands(grid), expected);
