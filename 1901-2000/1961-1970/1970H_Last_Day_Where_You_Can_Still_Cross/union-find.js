// 1970. Last Day Where You Can Still Cross
// https://leetcode.com/problems/last-day-where-you-can-still-cross/
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (rows, cols, cells) {
  const uf = new UnionFind(rows * cols + 2);
  const dirs = [1, 0, -1, 0, 1];
  const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = cells.length - 1; i > -1; i--) {
    const row = cells[i][0] - 1;
    const col = cells[i][1] - 1;
    grid[row][col] = 1;
    const index1 = row * cols + col + 1;
    for (let d = 0; d < 4; d++) {
      const nextRow = row + dirs[d];
      const nextCol = col + dirs[d + 1];
      if (!isValidCell(grid, nextRow, nextCol)) continue;
      const index2 = nextRow * cols + nextCol + 1;
      uf.union(index1, index2);
    }

    if (row === 0) {
      uf.union(0, index1);
    }

    const last = cells.length + 1;
    if (row === rows - 1) {
      uf.union(last, index1);
    }

    if (uf.find(0) === uf.find(last)) {
      return i;
    }
  }
  return -1;

  function isValidCell(grid, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) return false;
    return true;
  }
};

class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
  }

  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.size[rootX] > this.size[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.root[rootX] = rootY;
    this.size[rootY] += this.size[rootX];
  }
}

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ];
var expected = 2;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ];
var expected = 1;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 3,
  col = 3,
  cells = [
    [1, 2],
    [2, 1],
    [3, 3],
    [2, 2],
    [1, 1],
    [1, 3],
    [2, 3],
    [3, 2],
    [3, 1],
  ];
var expected = 3;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);
