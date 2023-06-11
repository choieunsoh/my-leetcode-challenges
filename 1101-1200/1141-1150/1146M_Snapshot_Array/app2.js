// 1146. Snapshot Array
// https://leetcode.com/problems/snapshot-array/
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.length = length;
  this.updated = true;
  this.arr = {};
  this.snaps = [];
  this.snap_id = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  if (val !== this.arr[index]) {
    this.arr[index] = val;
    this.updated = true;
  }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  if (this.updated) {
    this.snaps[this.snap_id] = this.arr;
    this.arr = { ...this.arr };
  } else {
    if (Number.isInteger(this.snaps[this.snap_id - 1])) {
      this.snaps[this.snap_id] = this.snaps[this.snap_id - 1];
    } else {
      this.snaps[this.snap_id] = this.snap_id - 1;
    }
  }
  this.updated = false;
  return this.snap_id++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  if (Number.isInteger(this.snaps[snap_id])) {
    return this.snaps[this.snaps[snap_id]][index] || 0;
  }
  return this.snaps[snap_id][index] || 0;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

var obj = new SnapshotArray(3);
var expected = [0, 5];
var result = [];
obj.set(0, 5);
console.log(obj);
result.push(obj.snap());
console.log(obj);
obj.set(0, 6);
console.log(obj);
result.push(obj.get(0, 0));
console.log(obj);
console.log(result, result.join() === expected.join());

var obj = new SnapshotArray(4);
var expected = [0, 1, 0, 2];
var result = [];
result.push(obj.snap());
console.log(obj);
result.push(obj.snap());
console.log(obj);
result.push(obj.get(3, 1));
console.log(obj);
obj.set(2, 4);
console.log(obj);
result.push(obj.snap());
console.log(obj);
obj.set(1, 4);
console.log(obj);
console.log(result, result.join() === expected.join());
