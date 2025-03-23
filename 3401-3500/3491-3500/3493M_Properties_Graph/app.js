// 3493. Properties Graph
// https://leetcode.com/problems/properties-graph/description/
// T.C.: O(n^2*k)
// S.C.: O(n*m)
/**
 * @param {number[][]} properties
 * @param {number} k
 * @return {number}
 */
var numberOfComponents = function (properties, k) {
  const n = properties.length;
  const freq = Array.from({ length: n }, () => new Map());
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (const num of properties[i]) {
      freq[i].set(num, (freq[i].get(num) ?? 0) + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let intersectCount = 0;
      for (const num1 of freq[i].keys()) {
        if (freq[j].has(num1)) {
          intersectCount++;
        }
      }

      if (intersectCount >= k) {
        uf.union(i, j);
      }
    }
  }
  return uf.groups;
};

class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
  }

  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return false;
    }

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.root[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.root[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }

    this.groups--;
    return true;
  }
}

var properties = [
    [1, 2],
    [1, 1],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ],
  k = 1;
var expected = 3;
var result = numberOfComponents(properties, k);
console.log(result, result === expected);

var properties = [
    [1, 2, 3],
    [2, 3, 4],
    [4, 3, 5],
  ],
  k = 2;
var expected = 1;
var result = numberOfComponents(properties, k);
console.log(result, result === expected);

var properties = [
    [1, 1],
    [1, 1],
  ],
  k = 2;
var expected = 2;
var result = numberOfComponents(properties, k);
console.log(result, result === expected);
