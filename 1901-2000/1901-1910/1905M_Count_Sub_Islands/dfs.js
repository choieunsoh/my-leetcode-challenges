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

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid1[i][j] === 0 && grid2[i][j] === 1) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid2[i][j] === 0) continue;
      dfs(i, j);
      subIslands++;
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid2[i][j] === 0) return;
    grid2[i][j] = 0;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
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
