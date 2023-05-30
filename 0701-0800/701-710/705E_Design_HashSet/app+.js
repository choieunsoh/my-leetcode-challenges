// 705. Design HashSet
// https://leetcode.com/problems/design-hashset/
var MyHashSet = function () {
  this.size = 9137;
  this.arr = new Array(this.size);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const idx = key % this.size;
  if (!this.arr[idx]) {
    this.arr[idx] = [key];
  } else {
    if (!this.arr[idx].includes(key)) {
      this.arr[idx].push(key);
    }
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const idx = key % this.size;
  if (this.arr[idx] && this.arr[idx].includes(key)) {
    const index = this.arr[idx].findIndex((item) => item === key);
    if (index > -1) this.arr[idx].splice(index, 1);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const idx = key % this.size;
  if (this.arr[idx] && this.arr[idx].includes(key)) {
    return true;
  }
  return false;
};

var operators = ['MyHashSet', 'add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'];
var values = [[], [1], [2], [1], [3], [2], [2], [2], [2]];
var expected = [null, null, null, true, false, null, true, null, false];
