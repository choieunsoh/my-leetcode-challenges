// 2852. Sum of Remoteness of All Cells
// https://leetcode.com/problems/sum-of-remoteness-of-all-cells/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var sumRemoteness = function (grid) {
  const n = grid.length;
  const dirs = [0, 1, 0, -1, 0];
  const uf = new UnionFind(n * n);
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === -1) continue;
      uf.add(i * n + j, grid[i][j]);
      total += grid[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === -1) continue;

      for (let d = 0; d < 4; d++) {
        const ni = i + dirs[d];
        const nj = j + dirs[d + 1];
        if (ni < 0 || ni >= n || nj < 0 || nj >= n) continue;
        if (grid[ni][nj] === -1) continue;
        uf.union(i * n + j, ni * n + nj);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === -1) continue;
      const value = uf.get(i * n + j);
      if (value !== 0) result += total - value;
    }
  }
  return result;
};

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
    this.groups = size;
  }

  add(x, val) {
    this.rank[x] = val;
  }

  get(x) {
    return this.rank[this.find(x)];
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }

    this.groups--;
  }
}

var grid = [
  [-1, 1, -1],
  [5, -1, 4],
  [-1, 3, -1],
];
var expected = 39;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [-1, 3, 4],
  [-1, -1, -1],
  [3, -1, -1],
];
var expected = 13;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = 0;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [11, 3, 4],
  [-1, -1, -1],
  [3, -1, -1],
];
var expected = 27;
var result = sumRemoteness(grid);
console.log(result, result === expected);

var grid = [
  [3, 3, 3],
  [-1, -1, -1],
  [3, -1, 1],
];
var expected = 34;
var result = sumRemoteness(grid);
console.log(result, result === expected);
