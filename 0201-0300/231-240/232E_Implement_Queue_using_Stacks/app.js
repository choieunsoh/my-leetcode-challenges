// https://leetcode.com/problems/implement-queue-using-stacks/
// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  const popped = this.stack2.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  const popped = this.stack2.pop();
  this.stack1.push(popped);
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return popped;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
