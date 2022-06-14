// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
// BFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  function bfs(x, y) {
    let queue = new Array();
    const matrix = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    queue.push([x, y]);
    while (queue.length > 0) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        for (const dir of matrix) {
          let r = curr[0] + dir[0];
          let c = curr[1] + dir[1];
          if (
            r < 0 ||
            r >= grid.length ||
            c < 0 ||
            c >= grid[0].length ||
            grid[r][c] == '0'
          ) {
            continue;
          }
          grid[r][c] = '0';
          queue.push([r, c]);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        bfs(i, j);
        count++;
      }
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
