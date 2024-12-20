// 716. Max Stack
// https://leetcode.com/problems/max-stack/description/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(log n)
// S.C.: O(n)

var MaxStack = function () {
  this.pq = new MaxPriorityQueue({ priority: (a) => a[0] });
  this.stack = [];
  this.deletedIndex = new Set();
  this.index = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.stack.push([x, this.index]);
  this.pq.enqueue([x, this.index]);
  this.index++;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  while (this.deletedIndex.has(this.stack[this.stack.length - 1][1])) {
    this.stack.pop();
  }
  const [poppedX, poppedIndex] = this.stack.pop();
  this.deletedIndex.add(poppedIndex);
  return poppedX;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  while (this.deletedIndex.has(this.stack[this.stack.length - 1][1])) {
    this.stack.pop();
  }
  const [topX] = this.stack[this.stack.length - 1];
  return topX;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  while (this.deletedIndex.has(this.pq.front().element[1])) {
    this.pq.dequeue();
  }
  const [maxX] = this.pq.front().element;
  return maxX;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  while (this.deletedIndex.has(this.pq.front().element[1])) {
    this.pq.dequeue();
  }
  const [maxX, maxIndex] = this.pq.dequeue().element;
  this.deletedIndex.add(maxIndex);
  return maxX;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

function run(ops, inputs, outputs) {
  const obj = new MaxStack();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    result = obj[op](...args) ?? null;
    console.log(i, op, args, result, result === expected);
  }
}

var ops = ['MaxStack', 'push', 'push', 'push', 'top', 'popMax', 'top', 'peekMax', 'pop', 'top'],
  inputs = [[], [5], [1], [5], [], [], [], [], [], []],
  outputs = [null, null, null, null, 5, 5, 1, 5, 1, 5];
run(ops, inputs, outputs);
