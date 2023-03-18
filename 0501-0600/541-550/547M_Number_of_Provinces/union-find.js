// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/?envType=study-plan&id=algorithm-ii
class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = Array.from({ length: size }, (_, i) => i);
    this.groups = size;
  }

  find(x) {
    if (this.root[x] === x) return x;
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.groups--;

      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootX] = rootY;
        this.rank[rootY]++;
      }
    }
  }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const unionFind = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) unionFind.union(i, j);
    }
  }
  return unionFind.groups;
};

var isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
var expected = 2;
var result = findCircleNum(isConnected);
console.log(result, result === expected);

var isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
var expected = 3;
var result = findCircleNum(isConnected);
console.log(result, result === expected);

var isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
var expected = 1;
var result = findCircleNum(isConnected);
console.log(result, result === expected);
