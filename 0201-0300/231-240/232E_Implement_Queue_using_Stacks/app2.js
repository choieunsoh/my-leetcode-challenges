// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/
class MyQueue {
  constructor() {
    this.stack = [];
    this.index = -1;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
    if (this.index === -1) this.index = 0;
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.empty()) return null;
    return this.stack[this.index++];
  }

  /**
   * @return {number}
   */
  peek() {
    return this.stack[this.index];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.index < 0 || this.index > this.stack.length - 1;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
