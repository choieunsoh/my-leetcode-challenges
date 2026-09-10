// 251. Flatten 2D Vector
// https://leetcode.com/problems/flatten-2d-vector/description/
// T.C.: O(N)
// S.C.: O(N)
/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
  this.vector = vec;
  this.inner = 0;
  this.outer = 0;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
  return this.hasNext() ? this.vector[this.outer][this.inner++] : undefined;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  this._advanceToNext();
  return this.outer < this.vector.length;
};

Vector2D.prototype._advanceToNext = function () {
  while (this.outer < this.vector.length && this.inner === this.vector[this.outer].length) {
    this.inner = 0;
    this.outer++;
  }
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function runTest(ops, inputs, outputs) {
  let obj;
  let result = null;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'Vector2D') {
      obj = new Vector2D(...inputs[i]);
    } else if (ops[i] === 'next') {
      result = obj.next();
    } else if (ops[i] === 'hasNext') {
      result = obj.hasNext();
    }
    console.log(result, outputs[i], result === outputs[i]);
  }
}

var ops = ['Vector2D', 'next', 'next', 'next', 'hasNext', 'hasNext', 'next', 'hasNext'],
  inputs = [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []],
  outputs = [null, 1, 2, 3, true, true, 4, false];
runTest(ops, inputs, outputs);
