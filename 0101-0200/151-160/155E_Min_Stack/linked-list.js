// 155. Min Stack
// https://leetcode.com/problems/min-stack/
class MinStackNode {
  constructor(val, min, next) {
    this.val = val;
    this.min = min;
    this.next = next;
  }
}
class MinStack {
  constructor() {
    this.head = null;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.head === null) {
      this.head = new MinStackNode(val, val, null);
    } else {
      const min = Math.min(this.head.min, val);
      this.head = new MinStackNode(val, min, this.head);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.head = this.head.next;
  }

  /**
   * @return {number}
   */
  top() {
    return this.head.val;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.head.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.head);
var min = obj.getMin();
console.log(min, -3, min === -3);
obj.pop();
var top = obj.top();
console.log(top, 0, top === 0);
var min = obj.getMin();
console.log(min, -2, min === -2);
