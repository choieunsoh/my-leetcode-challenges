// 1146. Snapshot Array
// https://leetcode.com/problems/snapshot-array/
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snapId = 0;
  this.snapshots = new Map();
  for (let i = 0; i < length; i++) {
    this.snapshots.set(i, new Map());
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.snapshots.get(index).set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.snapId++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  const map = this.snapshots.get(index);
  while (snap_id >= 0 && !map.has(snap_id)) {
    if (--snap_id < 0) return 0;
  }
  return map.get(snap_id);
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

var obj = new SnapshotArray(3);
obj.set(0, 5);
obj.snap();
obj.set(0, 6);
var result = obj.get(0, 0);
var expected = 5;
console.log(result, result === expected);
console.log(obj);

var obj = new SnapshotArray(4);
var expected = [0, 1, 0, 2];
var result = [];
result.push(obj.snap());
result.push(obj.snap());
result.push(obj.get(3, 1));
obj.set(2, 4);
result.push(obj.snap());
obj.set(1, 4);
console.log(result, result.join() === expected.join());
console.log(obj);
