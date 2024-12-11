// 604. Design Compressed String Iterator
// https://leetcode.com/problems/design-compressed-string-iterator/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {string} compressedString
 */
var StringIterator = function (compressedString) {
  const regex = /([a-zA-Z])(\d+)/g;
  let match;
  const data = [];
  while ((match = regex.exec(compressedString)) !== null) {
    data.push({ char: match[1], num: Number(match[2]) });
  }
  this.data = data;
  this.index = 0;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
  if (!this.hasNext()) return '';

  const data = this.data[this.index];
  data.num--;
  if (data.num === 0) this.index++;
  return data.char;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  if (this.index >= this.data.length) return false;
  const data = this.data[this.index];
  return data.num > 0;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    let op = ops[i];
    let input = inputs[i];
    let output = outputs[i];
    if (op === 'StringIterator') {
      obj = new StringIterator(...input);
    } else {
      let result = obj[op]();
      console.log(i, op, result, result === output);
    }
  }
}

var ops = ['StringIterator', 'next', 'next', 'next', 'next', 'next', 'next', 'hasNext', 'next', 'hasNext'],
  inputs = [['L1e2t1C1o1d1e1'], [], [], [], [], [], [], [], [], []],
  outputs = [null, 'L', 'e', 'e', 't', 'C', 'o', true, 'd', true];
run(ops, inputs, outputs);
