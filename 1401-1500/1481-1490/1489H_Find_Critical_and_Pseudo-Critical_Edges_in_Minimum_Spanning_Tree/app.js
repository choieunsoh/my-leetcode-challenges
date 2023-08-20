// 1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
// https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  const m = edges.length;
  const newEdges = Array.from({ length: m }, () => new Array(4).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < 3; j++) {
      newEdges[i][j] = edges[i][j];
    }
    newEdges[i][3] = i;
  }
  newEdges.sort((a, b) => a[2] - b[2]);
  newEdges.map((row) => console.log(row));

  const ufStd = new UnionFind(n);
  let stdWeight = 0;
  for (const [x, y, w] of newEdges) {
    if (ufStd.union(x, y)) {
      stdWeight += w;
    }
  }

  const result = [[], []];
  for (let i = 0; i < m; i++) {
    const ufIgnore = new UnionFind(n);
    let ignoreWeight = 0;
    for (let j = 0; j < m; j++) {
      if (i !== j && ufIgnore.union(newEdges[j][0], newEdges[j][1])) {
        ignoreWeight += newEdges[j][2];
      }
    }

    if (ufIgnore.maxSize < n || ignoreWeight > stdWeight) {
      result[0].push(newEdges[i][3]);
    } else {
      const ufForce = new UnionFind(n);
      ufForce.union(newEdges[i][0], newEdges[i][1]);
      let forceWeight = newEdges[i][2];
      for (let j = 0; j < m; j++) {
        if (i !== j && ufForce.union(newEdges[j][0], newEdges[j][1])) {
          forceWeight += newEdges[j][2];
        }
      }

      if (forceWeight === stdWeight) {
        result[1].push(newEdges[i][3]);
      }
    }
  }

  return result;
};
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
    this.maxSize = 1;
  }
  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return false;

    if (this.size[rootX] < this.size[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.parent[rootY] = rootX;
    this.size[rootX] += this.size[rootY];
    this.maxSize = Math.max(this.maxSize, this.size[rootX]);
    return true;
  }
}

var n = 5,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 2],
    [0, 3, 2],
    [0, 4, 3],
    [3, 4, 3],
    [1, 4, 6],
  ];
var expected = [
  [0, 1],
  [2, 3, 4, 5],
];
var result = findCriticalAndPseudoCriticalEdges(n, edges);
console.log(result, result.join() === expected.join());

var n = 4,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 1],
    [0, 3, 1],
  ];
var expected = [[], [0, 1, 2, 3]];
var result = findCriticalAndPseudoCriticalEdges(n, edges);
console.log(result, result.join() === expected.join());
