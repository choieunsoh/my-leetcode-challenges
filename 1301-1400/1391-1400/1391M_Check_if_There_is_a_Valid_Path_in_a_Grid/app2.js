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

  function detectL(x, y) {
    if (y - 1 >= 0) {
      const v = grid[x][y - 1];
      if (v === 4 || v === 6 || v === 1) {
        ds.merge(getId(x, y), getId(x, y - 1));
      }
    }
  }

  function detectR(x, y) {
    if (y + 1 < n) {
      const v = grid[x][y + 1];
      if (v === 3 || v === 5 || v === 1) {
        ds.merge(getId(x, y), getId(x, y + 1));
      }
    }
  }

  function detectU(x, y) {
    if (x - 1 >= 0) {
      const v = grid[x - 1][y];
      if (v === 3 || v === 4 || v === 2) {
        ds.merge(getId(x, y), getId(x - 1, y));
      }
    }
  }

  function detectD(x, y) {
    if (x + 1 < m) {
      const v = grid[x + 1][y];
      if (v === 5 || v === 6 || v === 2) {
        ds.merge(getId(x, y), getId(x + 1, y));
      }
    }
  }

  function handler(x, y) {
    switch (grid[x][y]) {
      case 1:
        detectL(x, y);
        detectR(x, y);
        break;
      case 2:
        detectU(x, y);
        detectD(x, y);
        break;
      case 3:
        detectL(x, y);
        detectD(x, y);
        break;
      case 4:
        detectR(x, y);
        detectD(x, y);
        break;
      case 5:
        detectL(x, y);
        detectU(x, y);
        break;
      case 6:
        detectR(x, y);
        detectU(x, y);
        break;
      default:
        break;
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
