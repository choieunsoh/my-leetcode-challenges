// 778. Swim in Rising Water
// https://leetcode.com/problems/swim-in-rising-water/description/
// T.C.: O(n^2 log n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  const size = new Array(n * n).fill(1);
  const root = Array.from({ length: n * n }, (_, i) => i);
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const positions = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      positions.push([i, j]);
    }
  }
  positions.sort((a, b) => grid[a[0]][a[1]] - grid[b[0]][b[1]]);

  for (const [i, j] of positions) {
    visited[i][j] = true;
    for (const [x, y] of [
      [i + 1, j],
      [i - 1, j],
      [i, j - 1],
      [i, j + 1],
    ]) {
      if (0 <= x && x < n && 0 <= y && y < n && visited[x][y]) {
        union(i * n + j, x * n + y);
      }
    }

    if (find(0) === find(n * n - 1)) {
      return grid[i][j];
    }
  }

  function find(x) {
    while (root[x] !== x) {
      root[x] = root[root[x]];
      x = root[x];
    }
    return x;
  }

  function union(x, y) {
    const px = find(x);
    const py = find(y);
    if (px !== py) {
      if (size[px] > size[py]) {
        [px, py] = [py, px];
      }
      size[py] += size[px];
      root[px] = py;
    }
  }
};

var grid = [
  [0, 2],
  [1, 3],
];
var expected = 3;
var result = swimInWater(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];
var expected = 16;
var result = swimInWater(grid);
console.log(result, result === expected);
