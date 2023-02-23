// 146. LRU Cache
// https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = {};
    this.tail = {};

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  moveToFront(node) {
    const prevNode = this.tail.prev;

    prevNode.next = node;
    node.next = this.tail;
    node.prev = prevNode;
    this.tail.prev = node;
  }

  disconnectNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.disconnectNode(node);
      this.moveToFront(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    //key exist
    if (this.get(key) !== -1) {
      return (this.tail.prev.value = value);
    }

    if (this.map.size === this.capacity) {
      this.map.delete(this.head.next.key);
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;
    }

    const node = { key, value };
    this.map.set(key, node);
    this.moveToFront(node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
console.log(lRUCache.map, [...lRUCache.map.keys()], lRUCache.size);
lRUCache.put(0, 0); // cache is {1=1, 2=2}
console.log(lRUCache.map, [...lRUCache.map.keys()], lRUCache.size);
var value = lRUCache.get(1); // return 1
console.log(value, 1);
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.map, [...lRUCache.map.keys()], lRUCache.size);
var value = lRUCache.get(0); // returns -1 (not found)
console.log(value, -1);
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.map, [...lRUCache.map.keys()], lRUCache.size);
var value = lRUCache.get(1); // return -1 (not found)
console.log(value, -1);
var value = lRUCache.get(3); // return 3
console.log(value, 3);
var value = lRUCache.get(4); // return 4
console.log(value, 4);
