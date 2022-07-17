// https://leetcode.com/problems/map-sum-pairs/
// 677. Map Sum Pairs

var MapSum = function () {
  this.map = new Map();
  this.val = 0;
  this.word = 0;
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let node = this;
  for (const char of key) {
    if (!node.map.has(char)) {
      node.map.set(char, new MapSum());
    }
    node = node.map.get(char);
    node.val += val;
  }

  if (node.word) {
    this.subtractOldVal(key, node.word);
  }

  node.word = val;
  return true;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0;
  let node = this;
  for (const char of prefix) {
    if (!node.map.has(char)) return 0;
    node = node.map.get(char);
    sum = node.val;
  }
  return sum;
};

MapSum.prototype.subtractOldVal = function (key, oldVal) {
  let node = this;
  for (const char of key) {
    node = node.map.get(char);
    node.val -= oldVal;
  }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

let result = false;
var obj = new MapSum();
result = obj.insert('apple', 3);
console.log('insert: apple', result);
result = obj.sum('ap');
console.log('sum: ap', result);
result = obj.insert('ap', 2);
console.log('insert: ap', result);
result = obj.insert('apple', 2);
console.log('insert: apple', result);
result = obj.sum('ap');
console.log('sum: ap', result);
