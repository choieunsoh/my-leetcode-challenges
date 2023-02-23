// 146. LRU Cache
// https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else {
    if (this.cache.size < this.capacity) {
      this.cache.set(key, value);
    } else {
      const lru_key = this.cache.keys().next().value;
      this.cache.delete(lru_key);
      this.cache.set(key, value);
    }
  }
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
