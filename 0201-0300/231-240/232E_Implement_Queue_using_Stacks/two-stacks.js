// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/
// push
// T.C.: O(n)
// S.C.: O(n)
// pop, peek, empty
// T.C.: O(1)
// S.C.: O(1)

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  this.stack1.push(x);
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1];
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

var obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.peek(), 1);
obj.push(3);
console.log(obj.pop(), 1);
console.log(obj.peek(), 2);
