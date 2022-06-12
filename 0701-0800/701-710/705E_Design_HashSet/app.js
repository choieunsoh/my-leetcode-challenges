// https://leetcode.com/problems/design-hashset/
// 705. Design HashSet

var MyHashSet = function () {
  this.items = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.items[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.items[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return !!this.items[key];
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var operators = [
  'MyHashSet',
  'add',
  'add',
  'contains',
  'contains',
  'add',
  'contains',
  'remove',
  'contains',
];
var values = [[], [1], [2], [1], [3], [2], [2], [2], [2]];
var expected = [null, null, null, true, false, null, true, null, false];
