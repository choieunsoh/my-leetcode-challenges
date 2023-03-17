// 622. Design Circular Queue
// https://leetcode.com/problems/design-circular-queue/
class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    this.size = k;
    this.count = 0;
    this.head = -1;
    this.tail = -1;
    this.queue = [];
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;

    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    this.count++;
    return true;
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    this.count--;
    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1;
    return this.queue[this.tail];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.count === this.size;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
