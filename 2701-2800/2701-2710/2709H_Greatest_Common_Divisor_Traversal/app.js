// 2709. Greatest Common Divisor Traversal
// https://leetcode.com/problems/greatest-common-divisor-traversal/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
  const n = nums.length;
  const uf = new UnionFind(n);
  const map = new Map();
  for (let i = 0; i < n; i++) {
    for (let p = 2; p * p <= nums[i]; p++) {
      if (nums[i] % p !== 0) continue;
      if (map.has(p)) {
        uf.union(map.get(p), i);
      } else {
        map.set(p, i);
      }
      while (nums[i] % p == 0) nums[i] /= p;
    }
    if (nums[i] > 1) {
      if (map.has(nums[i])) {
        uf.union(map.get(nums[i]), i);
      } else {
        map.set(nums[i], i);
      }
    }
  }
  return uf.groups === 1;
};

class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
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
    if (rootX == rootY) return;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.root[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }
    this.groups--;
  }
}

var nums = [2, 3, 6];
var expected = true;
var result = canTraverseAllPairs(nums);
console.log(result, result === expected);

var nums = [3, 9, 5];
var expected = false;
var result = canTraverseAllPairs(nums);
console.log(result, result === expected);

var nums = [4, 3, 12, 8];
var expected = true;
var result = canTraverseAllPairs(nums);
console.log(result, result === expected);
