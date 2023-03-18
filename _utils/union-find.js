export class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, (_, i) => i);
    this.groups = n;
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
