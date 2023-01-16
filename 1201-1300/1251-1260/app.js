// 1254. Number of Closed Islands
// https://leetcode.com/problems/number-of-closed-islands/description/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let closedIslands = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] > 0) continue;
      if (isClosedIsland(i, j)) {
        closedIslands++;
      }
    }
  }

  function isClosedIsland(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return false;
    if (grid[i][j] > 0) return true;

    grid[i][j] = 1;

    let validCloseIsland = true;
    for (const [r, c] of dir) {
      validCloseIsland &= isClosedIsland(i + r, j + c);
    }
    return validCloseIsland;
  }

  return closedIslands;
};

var grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
var expected = 2;
var result = closedIsland(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
];
var expected = 1;
var result = closedIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
var expected = 2;
var result = closedIsland(grid);
console.log(result, result === expected);
