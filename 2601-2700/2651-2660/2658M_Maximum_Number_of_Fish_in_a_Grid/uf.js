// 2658. Maximum Number of Fish in a Grid
// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  let maxFish = 0;
  const dirs = [0, 1, 0, -1, 0];
  const rows = grid.length;
  const cols = grid[0].length;
  const uf = new UnionFind(rows * cols);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) continue;
      const index = row * cols + col;
      uf.add(index, grid[row][col]);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) continue;
      const index = row * cols + col;
      for (let d = 0; d < 4; d++) {
        const nextRow = row + dirs[d];
        const nextCol = col + dirs[d + 1];
        if (!hasFish(nextRow, nextCol)) continue;
        const nextIndex = nextRow * cols + nextCol;
        uf.union(index, nextIndex);
      }
    }
  }
  return uf.maxRank();

  function hasFish(row, col) {
    return row >= 0 && col >= 0 && row < rows && col < cols && grid[row][col] > 0;
  }
};

class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(0);
    this.rank = new Array(size).fill(0);
    this.groups = 0;
  }

  add(x, val) {
    this.parent[x] = x;
    this.rank[x] = val;
    this.groups++;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  maxRank() {
    return Math.max(...this.rank);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
      this.rank[rootY] = 0;
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
      this.rank[rootX] = 0;
    }

    this.groups--;
    return true;
  }
}

var grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
var expected = 7;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];
var expected = 1;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [8, 6],
  [2, 6],
];
var expected = 22;
var result = findMaxFish(grid);
console.log(result, result === expected);

var grid = [
  [0, 5],
  [8, 4],
];
var expected = 17;
var result = findMaxFish(grid);
console.log(result, result === expected);
