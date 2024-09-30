// 1381. Design a Stack With Increment Operation
// https://leetcode.com/problems/design-a-stack-with-increment-operation/description/
// T.C.: O(1)
// S.C.: O(maxSize)
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = new Array(maxSize);
  this.increments = new Array(maxSize).fill(0);
  this.topIndex = -1;
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.topIndex >= this.stack.length - 1) return;
  this.stack[++this.topIndex] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.topIndex < 0) return -1;
  const poppedValue = this.stack[this.topIndex] + this.increments[this.topIndex];
  if (this.topIndex > 0) {
    this.increments[this.topIndex - 1] += this.increments[this.topIndex];
  }
  this.increments[this.topIndex] = 0;
  this.topIndex--;
  return poppedValue;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.topIndex < 0) return;
  const incrementIndex = Math.min(this.topIndex, k - 1);
  this.increments[incrementIndex] += val;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'CustomStack') {
      obj = new CustomStack(...args);
    } else {
      const result = obj[ops[i]](...args) ?? null;
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = [
    'CustomStack',
    'push',
    'push',
    'pop',
    'push',
    'push',
    'push',
    'increment',
    'increment',
    'pop',
    'pop',
    'pop',
    'pop',
  ],
  inputs = [[3], [1], [2], [], [2], [3], [4], [5, 100], [2, 100], [], [], [], []],
  outputs = [null, null, null, 2, null, null, null, null, null, 103, 202, 201, -1];
run(ops, inputs, outputs);
