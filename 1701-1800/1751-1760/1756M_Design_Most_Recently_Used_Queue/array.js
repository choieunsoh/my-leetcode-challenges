// 1756. Design Most Recently Used Queue
// https://leetcode.com/problems/design-most-recently-used-queue/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 */
var MRUQueue = function (n) {
  this.queue = Array.from({ length: n }, (_, i) => i + 1);
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  const num = this.queue[k - 1];
  this.queue.splice(k - 1, 1);
  this.queue.push(num);
  return num;
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
