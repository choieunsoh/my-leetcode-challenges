// 460. LFU Cache
// https://leetcode.com/problems/lfu-cache/

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insertHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  removeNode(node) {
    const { next, prev } = node;
    prev.next = next;
    next.prev = prev;
  }
  removeTail() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node.key;
  }
  isEmpty() {
    return this.head.next.value === null;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.leastFreq = 0;
  this.nodeMap = new Map();
  this.freqMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const node = this.nodeMap.get(key);
  if (!node) return -1;

  this._increaseFreq(node.freq, node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;

  const node = this.nodeMap.get(key);
  if (node) {
    node.value = value;
    this._increaseFreq(node.freq, node);
    return;
  }

  this.size++;
  if (this.size > this.capacity) {
    const tailKey = this.freqMap.get(this.leastFreq).removeTail();
    this.nodeMap.delete(tailKey);
    this.size--;
  }

  const newNode = new Node(key, value);
  this._insertFreq(1, newNode);

  this.nodeMap.set(key, newNode);
  this.leastFreq = 1;
};

LFUCache.prototype._increaseFreq = function (freq, node) {
  const freqLinkedList = this.freqMap.get(freq);
  freqLinkedList.removeNode(node);
  const isLeastFreq = freq === this.leastFreq;
  if (isLeastFreq && freqLinkedList.isEmpty()) {
    this.leastFreq++;
  }

  node.freq++;
  this._insertFreq(node.freq, node);
};

LFUCache.prototype._insertFreq = function (freq, node) {
  if (!this.freqMap.has(freq)) {
    this.freqMap.set(freq, new DoublyLinkedList());
  }
  this.freqMap.get(freq).insertHead(node);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
