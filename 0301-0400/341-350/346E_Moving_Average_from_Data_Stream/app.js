// 346. Moving Average from Data Stream
// https://leetcode.com/problems/moving-average-from-data-stream/
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.nums = [];
  this.sum = 0;
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.nums.length === this.size) {
    const remove = this.nums.shift();
    this.sum -= remove;
  }
  this.sum += val;
  this.nums.push(val);
  return Math.round((1e5 * this.sum) / this.nums.length) / 1e5;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var ops = ['MovingAverage', 'next', 'next', 'next', 'next'];
var inputs = [[3], [1], [10], [3], [5]];
var outputs = [null, 1.0, 5.5, 4.66667, 6.0];
var obj = null;
for (var i = 0; i < inputs.length; i++) {
  const [input] = inputs[i];
  if (ops[i] === 'MovingAverage') {
    obj = new MovingAverage(input);
  } else {
    const result = obj.next(input);
    console.log(i, result, result === outputs[i]);
  }
}
