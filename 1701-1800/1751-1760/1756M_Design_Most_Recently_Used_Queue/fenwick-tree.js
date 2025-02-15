// 1756. Design Most Recently Used Queue
// https://leetcode.com/problems/design-most-recently-used-queue/description/
// Fenwick Tree
// T.C.: O(log_2(n))
// S.C.: O(n)
class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  sum(index) {
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index = index & (index - 1);
    }
    return result;
  }

  insert(index, value) {
    index += 1;
    while (index < this.tree.length) {
      this.tree[index] += value;
      index += index & -index;
    }
  }
}

/**
 * @param {number} n
 */
var MRUQueue = function (n) {
  this.size = n;
  this.tree = new FenwickTree(n + 2000);
  this.values = new Array(n + 2000).fill(0);

  for (let i = 0; i < n; i++) {
    this.tree.insert(i, 1);
    this.values[i] = i + 1;
  }
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  let low = 0;
  let high = this.size;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (this.tree.sum(mid) < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  this.tree.insert(low - 1, -1);
  this.tree.insert(this.size, 1);
  this.values[this.size] = this.values[low - 1];
  this.size++;

  return this.values[low - 1];
};

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */

function run(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'MRUQueue') {
      obj = new MRUQueue(...args);
    } else {
      const expected = outputs[i];
      const result = obj[ops[i]](...args) ?? null;
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = ['MRUQueue', 'fetch', 'fetch', 'fetch', 'fetch'],
  inputs = [[8], [3], [5], [2], [8]],
  outputs = [null, 3, 6, 2, 2];
run(ops, inputs, outputs);
