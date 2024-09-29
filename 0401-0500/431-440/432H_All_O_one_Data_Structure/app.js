// 432. All O''one Data Structure
// https://leetcode.com/problems/all-oone-data-structure/description/
// T.C.: O(1)
// S.C.: O(n)
class Node {
  constructor(freq = 0) {
    this.freq = freq;
    this.prev = null;
    this.next = null;
    this.keys = new Set();
  }
}

var AllOne = function () {
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.map = new Map(); // string, Node
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    const freq = node.freq;
    node.keys.delete(key);

    let nextNode = node.next;
    if (nextNode === this.tail || nextNode.freq !== freq + 1) {
      const newNode = new Node(freq + 1);
      newNode.prev = node;
      newNode.next = nextNode;

      node.next = newNode;
      nextNode.prev = newNode;

      nextNode = newNode;
    }

    nextNode.keys.add(key);
    this.map.set(key, nextNode);

    if (node.keys.size === 0) {
      this._removeNode(node);
    }
  } else {
    let firstNode = this.head.next;
    if (firstNode === this.tail || firstNode.freq > 1) {
      const newNode = new Node(1);
      newNode.prev = this.head;
      newNode.next = firstNode;

      this.head.next = newNode;
      firstNode.prev = newNode;

      firstNode = newNode;
    }

    firstNode.keys.add(key);
    this.map.set(key, firstNode);
  }
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (!this.map.has(key)) {
    return;
  }

  const node = this.map.get(key);
  const freq = node.freq;
  node.keys.delete(key);

  if (freq === 1) {
    this.map.delete(key);
  } else {
    let prevNode = node.prev;
    if (prevNode === this.head || prevNode.freq !== freq - 1) {
      const newNode = new Node(freq - 1);
      newNode.prev = prevNode;
      newNode.next = node;

      prevNode.next = newNode;
      node.prev = newNode;

      prevNode = newNode;
    }

    prevNode.keys.add(key);
    this.map.set(key, prevNode);
  }

  if (node.keys.size === 0) {
    this._removeNode(node);
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.tail.prev === this.head) {
    return '';
  }
  return this.tail.prev.keys.values().next().value;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (this.head.next === this.tail) {
    return '';
  }
  return this.head.next.keys.values().next().value;
};

/**
 * @param {Node} node
 * @return {void}
 */
AllOne.prototype._removeNode = function (node) {
  const { prev, next } = node;
  prev.next = next;
  next.prev = prev;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'AllOne') {
      obj = new AllOne();
    } else {
      const result = obj[ops[i]](...args) ?? null;
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = [
    'AllOne',
    'inc',
    'inc',
    'getMaxKey',
    'getMinKey',
    'inc',
    'getMaxKey',
    'getMinKey',
    'dec',
    'getMaxKey',
    'getMinKey',
  ],
  inputs = [[], ['hello'], ['hello'], [], [], ['leet'], [], [], ['hello'], [], []],
  outputs = [null, null, null, 'hello', 'hello', null, 'hello', 'leet', null, 'leet', 'leet'];
run(ops, inputs, outputs);

var ops = [
    'AllOne',
    'inc',
    'inc',
    'inc',
    'inc',
    'inc',
    'inc',
    'dec',
    'dec',
    'getMinKey',
    'dec',
    'getMaxKey',
    'getMinKey',
  ],
  inputs = [[], ['a'], ['b'], ['b'], ['c'], ['c'], ['c'], ['b'], ['b'], [], ['a'], [], []],
  outputs = [null, null, null, null, null, null, null, null, null, 'a', null, 'c', 'c'];
run(ops, inputs, outputs);
