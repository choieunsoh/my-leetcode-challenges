// 1970. Last Day Where You Can Still Cross
// https://leetcode.com/problems/last-day-where-you-can-still-cross/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  const uf = new UnionFind(row * col + 2);
  const grid = Array.from({ length: row }, () => Array(col).fill(0));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let i = 0; i < row * col; ++i) {
    const r = cells[i][0] - 1;
    const c = cells[i][1] - 1;
    grid[r][c] = 1;
    const index1 = r * col + c + 1;
    for (let d of directions) {
      const newR = r + d[0];
      const newC = c + d[1];
      const index2 = newR * col + newC + 1;
      if (newR >= 0 && newR < row && newC >= 0 && newC < col && grid[newR][newC] === 1) {
        uf.union(index1, index2);
      }
    }

    if (c === 0) {
      uf.union(0, index1);
    }

    if (c === col - 1) {
      uf.union(row * col + 1, index1);
    }

    if (uf.find(0) === uf.find(row * col + 1)) {
      return i;
    }
  }
  return -1;
};

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return;
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else {
      this.parent[py] = px;
      if (this.rank[px] === this.rank[py]) this.rank[px]++;
    }
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
