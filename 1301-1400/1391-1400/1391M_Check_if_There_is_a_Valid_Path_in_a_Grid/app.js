// 1391. Check if There is a Valid Path in a Grid
// https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const patterns = [0, 0b1010, 0b0101, 0b1100, 0b0110, 0b1001, 0b0011];
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const ds = new DisjointSet(m, n);
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      handler(i, j);
    }
  }
  return ds.find(getId(0, 0)) === ds.find(getId(m - 1, n - 1));

  function getId(x, y) {
    return x * n + y;
  }

  function handler(x, y) {
    const pattern = patterns[grid[x][y]];
    for (let i = 0; i < 4; ++i) {
      if ((pattern & (1 << i)) !== 0) {
        const sx = x + dirs[i][0];
        const sy = y + dirs[i][1];
        if (sx >= 0 && sx < m && sy >= 0 && sy < n && (patterns[grid[sx][sy]] & (1 << (i + 2) % 4)) !== 0) {
          ds.merge(getId(x, y), getId(sx, sy));
        }
      }
    }
  }
};

class DisjointSet {
  constructor(m, n) {
    this.f = new Array(m * n);
    for (let i = 0; i < m * n; ++i) this.f[i] = i;
  }

  find(x) {
    if (this.f[x] === x) return x;
    return (this.f[x] = this.find(this.f[x]));
  }

  merge(x, y) {
    this.f[this.find(x)] = this.find(y);
  }
}

var grid = [
  [2, 4, 3],
  [6, 5, 2],
];
var expected = true;
var result = hasValidPath(grid);
console.log(result, result === expected);

var grid = [
  [1, 2, 1],
  [1, 2, 1],
];
var expected = false;
var result = hasValidPath(grid);
console.log(result, result === expected);

var grid = [[1, 1, 2]];
var expected = false;
var result = hasValidPath(grid);
console.log(result, result === expected);
