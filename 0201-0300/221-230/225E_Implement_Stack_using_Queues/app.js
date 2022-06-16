// https://leetcode.com/problems/implement-stack-using-queues/
// 225. Implement Stack using Queues

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length) {
    this.queue2.push(this.queue1.shift());
  }
  const popped = this.queue2.pop();
  while (this.queue2.length) {
    this.queue1.push(this.queue2.shift());
  }
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue1.length) {
    this.queue2.push(this.queue1.shift());
  }
  const popped = this.queue2.pop();
  while (this.queue2.length) {
    this.queue1.push(this.queue2.shift());
  }
  this.queue1.push(popped);
  return popped;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
