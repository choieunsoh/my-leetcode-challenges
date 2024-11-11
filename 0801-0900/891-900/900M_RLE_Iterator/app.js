// 900. RLE Iterator
// https://leetcode.com/problems/rle-iterator/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  this.encoding = encoding;
  this.index = 0;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  if (this.index >= this.encoding.length) {
    return -1;
  }

  while (this.encoding[this.index] < n) {
    n -= this.encoding[this.index];
    this.index += 2;
  }

  this.encoding[this.index] -= n;
  return this.encoding[this.index + 1] ?? -1;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'RLEIterator') {
      obj = new RLEIterator(...args);
    } else {
      const result = obj[ops[i]](...args);
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = ['RLEIterator', 'next', 'next', 'next', 'next'],
  inputs = [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]],
  outputs = [null, 8, 8, 5, -1];
run(ops, inputs, outputs);
