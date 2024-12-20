// 716. Max Stack
// https://leetcode.com/problems/max-stack/description/
// T.C.: O(log n)
// S.C.: O(n)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var MaxStack = function () {
  this.head = new ListNode(0);
  this.tail = new ListNode(0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.heap = [];
};

MaxStack.prototype.swap = function (ind1, ind2) {
  [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]];
};

MaxStack.prototype.heapifyUp = function (ind) {
  let cur = ind;
  let parentInd = Math.floor((cur - 1) / 2);

  while (cur > 0 && this.heap[cur].val >= this.heap[parentInd].val) {
    this.swap(cur, parentInd);
    cur = parentInd;
    parentInd = Math.floor((cur - 1) / 2);
  }
};

MaxStack.prototype.heapifyDown = function (ind) {
  let leftInd = 2 * ind + 1;
  let rightInd = 2 * ind + 2;
  let largest = ind;

  if (leftInd < this.heap.length && this.heap[leftInd].val > this.heap[largest].val) {
    largest = leftInd;
  }
  if (rightInd < this.heap.length && this.heap[rightInd].val > this.heap[largest].val) {
    largest = rightInd;
  }

  if (largest !== ind) {
    this.swap(ind, largest);
    this.heapifyDown(largest);
  }
};

MaxStack.prototype.addNode = function (node) {
  let tailPrev = this.tail.prev;
  tailPrev.next = node;
  node.prev = tailPrev;
  this.tail.prev = node;
  node.next = this.tail;
};

MaxStack.prototype.removeNode = function (node) {
  let prevNode = node.prev;
  let nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
  node.next = null;
  node.prev = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  let node = new ListNode(x);
  this.addNode(node);
  this.heap.push(node);
  this.heapifyUp(this.heap.length - 1);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  const node = this.tail.prev;
  this.removeNode(node);

  // Find the node in the heap
  const index = this.heap.indexOf(node);
  // Swap it with the last element in the heap
  this.swap(index, this.heap.length - 1);
  this.heap.pop();

  // Restore the heap property
  if (this.heap.length > 0) {
    this.heapifyDown(index);
  }
  return node.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.tail.prev.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return this.heap[0].val;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const node = this.heap[0];

  // Swap the root with the last element in the heap
  this.swap(0, this.heap.length - 1);

  // Remove the last element from the heap
  this.heap.pop();

  // Restore heap property after removing the root
  if (this.heap.length > 0) {
    this.heapifyDown(0);
  }

  // Remove the node from the doubly linked list
  this.removeNode(node);

  return node.val;
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
