// 1584. Min Cost to Connect All Points
// https://leetcode.com/problems/min-cost-to-connect-all-points
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const edges = [];
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      edges.push([distance, i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]);

  const uf = new UnionFind(n);
  let result = 0;
  let edgesUsed = 0;
  for (let i = 0; i < edges.length && edgesUsed < n - 1; ++i) {
    const [weight, node1, node2] = edges[i];
    if (uf.union(node1, node2)) {
      result += weight;
      edgesUsed++;
    }
  }
  return result;
};

class UnionFind {
  constructor(size) {
    this.group = new Array(size).fill(0);
    this.rank = new Array(size).fill(0);
    for (let i = 0; i < size; ++i) {
      this.group[i] = i;
    }
  }

  find(node) {
    if (this.group[node] !== node) {
      this.group[node] = this.find(this.group[node]);
    }
    return this.group[node];
  }

  union(node1, node2) {
    const group1 = this.find(node1);
    const group2 = this.find(node2);
    if (group1 === group2) {
      return false;
    }

    if (this.rank[group1] > this.rank[group2]) {
      this.group[group2] = group1;
    } else if (this.rank[group1] < this.rank[group2]) {
      this.group[group1] = group2;
    } else {
      this.group[group1] = group2;
      this.rank[group2] += 1;
    }

    return true;
  }
}

var points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
var expected = 20;
var result = minCostConnectPoints(points);
console.log(result, result === expected);

var points = [
  [3, 12],
  [-2, 5],
  [-4, 1],
];
var expected = 18;
var result = minCostConnectPoints(points);
console.log(result, result === expected);
