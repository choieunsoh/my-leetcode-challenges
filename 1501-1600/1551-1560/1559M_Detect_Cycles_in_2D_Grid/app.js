// 1559. Detect Cycles in 2D Grid
// https://leetcode.com/problems/detect-cycles-in-2d-grid/description/
// Time: O(m*n * inverse_ackermann) ~ O(m*n)
// Space: O(m*n)
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const m = grid.length;
  if (m === 0) return false;
  const n = grid[0].length;
  const uf = new UnionFind(m * n);

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const idx = i * n + j;
      if (i > 0 && grid[i][j] === grid[i - 1][j]) {
        if (!uf.findAndUnion(idx, (i - 1) * n + j)) {
          return true;
        }
      }
      if (j > 0 && grid[i][j] === grid[i][j - 1]) {
        if (!uf.findAndUnion(idx, i * n + j - 1)) {
          return true;
        }
      }
    }
  }
  return false;
};

class UnionFind {
  constructor(n) {
    this.n = n;
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
    this.setCount = n;
  }

  find(x) {
    if (this.parent[x] === x) return x;
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    if (this.size[x] < this.size[y]) {
      const tmp = x;
      x = y;
      y = tmp;
    }
    this.parent[y] = x;
    this.size[x] += this.size[y];
    --this.setCount;
  }

  findAndUnion(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX !== parentY) {
      this.union(parentX, parentY);
      return true;
    }
    return false;
  }
}

// -- Simple tests --
var grid = [
  ['a', 'a', 'a', 'a'],
  ['a', 'b', 'b', 'a'],
  ['a', 'b', 'b', 'a'],
  ['a', 'a', 'a', 'a'],
];
var expected = true;
var result = containsCycle(grid);
console.log(result, result === expected);

var grid = [
  ['c', 'c', 'c', 'a'],
  ['c', 'd', 'c', 'c'],
  ['c', 'c', 'e', 'c'],
  ['f', 'c', 'c', 'c'],
];
var expected = true;
var result = containsCycle(grid);
console.log(result, result === expected);

var grid = [
  ['a', 'b', 'b'],
  ['b', 'z', 'b'],
  ['b', 'b', 'a'],
];
var expected = false;
var result = containsCycle(grid);
console.log(result, result === expected);
