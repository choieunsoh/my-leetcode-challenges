// 1756. Design Most Recently Used Queue
// https://leetcode.com/problems/design-most-recently-used-queue/description/
// T.C.: O(n)
// S.C.: O(n)
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number} n
 */
var MRUQueue = function (n) {
  this.head = new ListNode(0);
  let curr = this.head;
  for (let i = 1; i <= n; i++) {
    const node = new ListNode(i);
    curr.next = node;
    curr = curr.next;
  }
  this.tail = curr;
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  let curr = this.head;
  for (let index = 0; index < k - 1; index++) {
    curr = curr.next;
  }

  const num = curr.next.val;
  curr.next = curr.next.next;

  this.tail.next = new ListNode(num);
  this.tail = this.tail.next;

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
