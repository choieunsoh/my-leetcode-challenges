// 706. Design HashMap
// https://leetcode.com/problems/design-hashmap/

var MyHashMap = function () {
  this.hashKey = 2069;
  this.buckets = Array.from({ length: this.hashKey }, () => []);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = key % this.hashKey;
  const bucket = this.buckets[hash];
  for (const item of bucket) {
    if (item[0] === key) {
      item[1] = value;
      return;
    }
  }
  bucket.push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = key % this.hashKey;
  const bucket = this.buckets[hash];
  for (const item of bucket) {
    if (item[0] === key) {
      return item[1];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = key % this.hashKey;
  const bucket = this.buckets[hash];
  let foundIndex = -1;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex !== -1) {
    bucket.splice(foundIndex, 1);
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
