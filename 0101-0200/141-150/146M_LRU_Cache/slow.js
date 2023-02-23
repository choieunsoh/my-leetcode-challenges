// 146. LRU Cache
// https://leetcode.com/problems/lru-cache/
var Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.c = capacity;
  this.length = 0;
  this.map = {};
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key];
  if (!node) {
    return -1;
  }
  this.remove(node);
  this.add(key, node.val);
  return node.val;
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    this.remove(this.map[key]);
    this.add(key, value);
  } else {
    if (this.length === this.c) {
      this.remove(this.tail);
      this.add(key, value);
    } else {
      // push
      this.add(key, value);
      this.length++;
    }
  }
};

LRUCache.prototype.add = function (key, value) {
  const node = new Node(key, value);
  this.map[key] = node;
  if (this.head) {
    this.head.prev = node;
    node.next = this.head;
  }
  this.head = this.map[key];
  if (!this.tail) {
    this.tail = node;
  }
};

LRUCache.prototype.remove = function (node) {
  const { prev, next } = node;
  if (prev) {
    prev.next = next;
  } else {
    this.head = node.next;
  }
  if (next) {
    next.prev = prev;
  } else {
    this.tail = node.prev;
  }
  delete this.map[node.key];
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
console.log(lRUCache.map);
lRUCache.put(0, 0); // cache is {1=1, 2=2}
console.log(lRUCache.map);
var value = lRUCache.get(1); // return 1
console.log(value, 1);
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.map);
var value = lRUCache.get(0); // returns -1 (not found)
console.log(value, -1);
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.map);
var value = lRUCache.get(1); // return -1 (not found)
console.log(value, -1);
var value = lRUCache.get(3); // return 3
console.log(value, 3);
var value = lRUCache.get(4); // return 4
console.log(value, 4);
