// 362. Design Hit Counter
// https://leetcode.com/problems/design-hit-counter/
// T.C.: O(n)
// S.C.: O(n)

var HitCounter = function () {
  this.hits = new Map();
  this.size = 0;
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.size++;
  const count = this.hits.get(timestamp) ?? 0;
  this.hits.set(timestamp, count + 1);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  const min = timestamp - 299;
  for (const [time, count] of this.hits) {
    if (time < min) {
      this.size -= count;
      this.hits.delete(time);
    } else {
      break;
    }
  }
  return this.size;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

function test(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < inputs.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'hit':
        obj.hit(args[0]);
        break;
      case 'getHits':
        result = obj.getHits(args[0]);
        break;
      default:
        obj = new HitCounter();
        break;
    }
    console.log(i, op, args, expected, result, result === expected);
  }
}

var ops = ['HitCounter', 'hit', 'hit', 'hit', 'getHits', 'hit', 'getHits', 'getHits'],
  inputs = [[], [1], [2], [3], [4], [300], [300], [301]],
  outputs = [null, null, null, null, 3, null, 4, 3];
test(ops, inputs, outputs);

var ops = ['HitCounter', 'hit', 'hit', 'hit', 'hit', 'getHits'],
  inputs = [[], [1], [1], [1], [300], [300]],
  outputs = [null, null, null, null, null, 4];
test(ops, inputs, outputs);

var ops = ['HitCounter', 'hit', 'hit', 'hit', 'hit', 'getHits', 'hit', 'getHits', 'hit', 'getHits'],
  inputs = [[], [1], [1], [1], [300], [300], [300], [300], [301], [301]],
  outputs = [null, null, null, null, null, 4, null, 5, null, 3];
test(ops, inputs, outputs);
