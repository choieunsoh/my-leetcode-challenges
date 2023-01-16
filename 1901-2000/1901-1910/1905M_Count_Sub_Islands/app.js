// 1905. Count Sub Islands
// https://leetcode.com/problems/count-sub-islands/
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let subIslands = 0;
  const rows = grid1.length;
  const cols = grid1[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid2[i][j] !== 1) continue;
      if (isSubIsland(i, j)) {
        subIslands++;
      }
    }
  }

  function isSubIsland(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return true;
    if (grid2[i][j] !== 1) return true;

    let valid = grid2[i][j] === grid1[i][j];
    grid2[i][j] = 0;

    for (const [r, c] of dir) {
      valid &= isSubIsland(i + r, j + c);
    }
    return valid;
  }

  return subIslands;
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
