// FenwickTree or Binary Indexed Tree
// https://en.wikipedia.org/wiki/Fenwick_tree
// https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/
// https://www.geeksforgeeks.org/fenwick-tree-or-binary-indexed-tree-2/

class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, delta) {
    index++;
    while (index < this.tree.length) {
      this.tree[index] += delta;
      index += index & -index;
    }
  }

  query(index) {
    index++;
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index -= index & -index;
    }
    return result;
  }
}

module.exports = { FenwickTree };
