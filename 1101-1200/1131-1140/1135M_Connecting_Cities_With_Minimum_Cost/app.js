// 1135. Connecting Cities With Minimum Cost
// https://leetcode.com/problems/connecting-cities-with-minimum-cost/description/
// T.C.: O(m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
  connections.sort((a, b) => a[2] - b[2]);
  let total = 0;
  let cost = 0;
  const uf = new UnionFind(n);
  for (const [a, b, c] of connections) {
    if (uf.isInSameGroup(a, b)) continue;

    uf.union(a, b);
    cost += c;
    total++;
  }

  return total === n - 1 ? cost : -1;
};

class UnionFind {
  constructor(n) {
    this.parents = new Array(n + 1);
    this.weights = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
      this.parents[i] = i;
      this.weights[i] = 1;
    }
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA === rootB) return;

    if (this.weights[rootA] > this.weights[rootB]) {
      this.parents[rootB] = rootA;
      this.weights[rootA] += this.weights[rootB];
    } else {
      this.parents[rootA] = rootB;
      this.weights[rootB] += this.weights[rootA];
    }
  }

  find(a) {
    while (a !== this.parents[a]) {
      this.parents[a] = this.parents[this.parents[a]];
      a = this.parents[a];
    }
    return a;
  }

  isInSameGroup(a, b) {
    return this.find(a) === this.find(b);
  }
}

var n = 3,
  connections = [
    [1, 2, 5],
    [1, 3, 6],
    [2, 3, 1],
  ];
var expected = 6;
var result = minimumCost(n, connections);
console.log(result, result === expected);

var n = 4,
  connections = [
    [1, 2, 3],
    [3, 4, 4],
  ];
var expected = -1;
var result = minimumCost(n, connections);
console.log(result, result === expected);
