// 305. Number of Islands II
// https://leetcode.com/problems/number-of-islands-ii/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function (m, n, positions) {
  const result = [];
  const dir = [0, 1, 0, -1, 0];
  const uf = new UnionFind(m * n);
  for (const [x, y] of positions) {
    const landPosition = x * n + y;
    uf.addLand(landPosition);

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [x + dir[i], y + dir[i + 1]];
      const neighborPosition = nextX * n + nextY;
      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && uf.isLand(neighborPosition)) {
        uf.union(landPosition, neighborPosition);
      }
    }
    result.push(uf.groups);
  }
  return result;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(-1);
    this.rank = new Array(n).fill(0);
    this.groups = 0;
  }

  addLand(x) {
    if (this.parent[x] !== -1) return;
    this.parent[x] = x;
    this.groups++;
  }

  isLand(x) {
    return this.parent[x] !== -1;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }
    this.groups--;
  }
}

var m = 3,
  n = 3,
  positions = [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ];
var expected = [1, 1, 2, 3];
var result = numIslands2(m, n, positions);
console.log(result, result.join() === expected.join());

var m = 1,
  n = 1,
  positions = [[0, 0]];
var expected = [1];
var result = numIslands2(m, n, positions);
console.log(result, result.join() === expected.join());
