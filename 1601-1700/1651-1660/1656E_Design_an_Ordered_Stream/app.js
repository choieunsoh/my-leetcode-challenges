// 1656. Design an Ordered Stream
// https://leetcode.com/problems/design-an-ordered-stream/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.n = n;
  this.currKey = 1;
  this.stream = new Array(n + 1).fill('');
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey] = value;

  if (idKey !== this.currKey) {
    return [];
  }

  const result = [];
  while (this.currKey <= this.n && this.stream[this.currKey]) {
    result.push(this.stream[this.currKey++]);
  }
  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'OrderedStream':
        obj = new OrderedStream(...input);
        break;
      default:
        result = obj[op](...input) ?? null;
        break;
    }
    console.log(i, op, input, result, JSON.stringify(result) === JSON.stringify(expected));
  }
}

var ops = ['OrderedStream', 'insert', 'insert', 'insert', 'insert', 'insert'],
  inputs = [[5], [3, 'ccccc'], [1, 'aaaaa'], [2, 'bbbbb'], [5, 'eeeee'], [4, 'ddddd']],
  outputs = [null, [], ['aaaaa'], ['bbbbb', 'ccccc'], [], ['ddddd', 'eeeee']];
run(ops, inputs, outputs);
