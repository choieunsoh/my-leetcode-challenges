// https://leetcode.com/problems/design-circular-queue/
// 622. Design Circular Queue
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = k;
  this.count = 0;
  this.queue = [];
  this.head = -1;
  this.tail = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) this.head = 0;

  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;
  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  if (this.head === this.tail) {
    this.head = this.tail = -1;
  } else {
    this.head = (this.head + 1) % this.size;
  }
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.count === 0 ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.count === 0 ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.size;
};

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
