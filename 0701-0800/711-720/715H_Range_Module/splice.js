// 715. Range Module
// https://leetcode.com/problems/range-module/description/
// T.C.: O()
// S.C.: O()

var RangeModule = function () {
  this.ranges = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  const l = this._binarySearchLeft(this.ranges, left);
  const r = this._binarySearchRight(this.ranges, right);

  const ranges = [];
  if (l % 2 === 0) ranges.push(left);
  if (r % 2 === 0) ranges.push(right);

  this.ranges.splice(l, r - l, ...ranges);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  const l = this._binarySearchLeft(this.ranges, left);
  const r = this._binarySearchRight(this.ranges, right);

  const ranges = [];
  if (l % 2 === 1) ranges.push(left);
  if (r % 2 === 1) ranges.push(right);

  this.ranges.splice(l, r - l, ...ranges);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  const l = this._binarySearchRight(this.ranges, left);
  const r = this._binarySearchLeft(this.ranges, right);

  return l === r && l % 2 === 1;
};

RangeModule.prototype._binarySearchLeft = function (arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

RangeModule.prototype._binarySearchRight = function (arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

function run(ops, inputs, outputs) {
  const obj = new RangeModule();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    result = obj[op](...args) ?? null;
    console.log(i, op, args, result, result === expected);
  }
}

var ops = ['RangeModule', 'addRange', 'removeRange', 'queryRange', 'queryRange', 'queryRange'],
  inputs = [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]],
  outputs = [null, null, null, true, false, true];
run(ops, inputs, outputs);
