// 1670. Design Front Middle Back Queue
// https://leetcode.com/problems/design-front-middle-back-queue/
// T.C.: O(1)
// S.C.: O(n)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var FrontMiddleBackQueue = function () {
  this.front = null;
  this.middle = null;
  this.back = null;
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  const node = new Node(val);
  if (this.front === null) {
    this.front = node;
    this.middle = node;
    this.back = node;
  } else {
    node.next = this.front;
    this.front.prev = node;
    this.front = node;
  }

  if (this.size % 2 === 1) {
    this.middle = this.middle.prev;
  }

  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  const node = new Node(val);
  if (this.middle === null) {
    this.front = node;
    this.middle = node;
    this.back = node;
  } else {
    if (this.size % 2 === 0) {
      node.next = this.middle.next;
      if (node.next !== null) node.next.prev = node;
      node.prev = this.middle;
      this.middle.next = node;
      this.middle = node;
    } else {
      if (this.middle.prev !== null) this.middle.prev.next = node;
      node.prev = this.middle.prev;
      this.middle.prev = node;
      node.next = this.middle;
      this.middle = node;
    }

    if (this.middle.prev === null) {
      this.front = this.middle;
    }
  }

  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  const node = new Node(val);
  if (this.back === null) {
    this.front = node;
    this.middle = node;
    this.back = node;
  } else {
    node.prev = this.back;
    this.back.next = node;
    this.back = node;
  }

  if (this.size > 0 && this.size % 2 === 0) {
    this.middle = this.middle.next;
  }

  this.size++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.front === null) return -1;

  const value = this.front.val;
  this.front = this.front.next;
  if (this.front !== null) {
    this.front.prev = null;
  } else {
    this.middle = null;
    this.back = null;
  }

  if (this.size % 2 === 0 && this.middle !== null) {
    this.middle = this.middle.next;
  }

  this.size--;

  return value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.middle === null) return -1;

  const value = this.middle.val;
  if (this.middle.prev !== null) {
    this.middle.prev.next = this.middle.next;
  }
  if (this.middle.next !== null) {
    this.middle.next.prev = this.middle.prev;
  }

  if (this.size % 2 === 0) {
    this.middle = this.middle.next;
  } else {
    this.middle = this.middle.prev;
  }

  if (this.middle === null) {
    this.front = null;
    this.back = null;
  }

  if (this.size === 2) {
    this.front = this.middle;
  }

  this.size--;

  return value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.back === null) return -1;

  const value = this.back.val;
  this.back = this.back.prev;

  if (this.back !== null) {
    this.back.next = null;
  } else {
    this.front = null;
    this.middle = null;
  }

  if (this.size % 2 === 1 && this.middle !== null) {
    this.middle = this.middle.prev;
  }

  this.size--;

  return value;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

var ops = [
    'FrontMiddleBackQueue',
    'pushFront',
    'pushBack',
    'pushMiddle',
    'pushMiddle',
    'popFront',
    'popMiddle',
    'popMiddle',
    'popBack',
    'popFront',
  ],
  inputs = [[], [1], [2], [3], [4], [], [], [], [], []],
  outputs = [null, null, null, null, null, 1, 3, 4, 2, -1];

var obj = null;
for (let i = 0; i < ops.length; i++) {
  const op = ops[i];
  const args = inputs[i];
  const expected = outputs[i];
  let result = null;
  switch (op) {
    case 'pushFront':
      obj.pushFront(args[0]);
      break;
    case 'pushMiddle':
      obj.pushMiddle(args[0]);
      break;
    case 'pushBack':
      obj.pushBack(args[0]);
      break;
    case 'popFront':
      result = obj.popFront();
      break;
    case 'popMiddle':
      result = obj.popMiddle();
      break;
    case 'popBack':
      result = obj.popBack();
      break;
    default:
      obj = new FrontMiddleBackQueue();
      break;
  }
  console.log(i, op, args, expected, result, result === expected);
}
