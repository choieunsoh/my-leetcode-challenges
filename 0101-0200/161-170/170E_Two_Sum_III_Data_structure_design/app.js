// 170. Two Sum III - Data structure design
// https://leetcode.com/problems/two-sum-iii-data-structure-design/
// T.C.: O(n)
// S.C.: O(n)

var TwoSum = function () {
  this.nums = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  const count = this.nums.get(number) ?? 0;
  this.nums.set(number, count + 1);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  for (const num of this.nums.keys()) {
    const target = value - num;
    if (target !== num) {
      if (this.nums.has(target)) return true;
    } else {
      if (this.nums.get(target) > 1) return true;
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

function run(ops, inputs, outputs) {
  let twoSum = null;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'TwoSum') {
      twoSum = new TwoSum();
    } else if (ops[i] === 'add') {
      twoSum.add(inputs[i][0]);
    } else {
      const result = twoSum.find(inputs[i][0]);
      console.log(i, inputs[i][0], result, result === outputs[i]);
    }
  }
  console.log();
}

var ops = ['TwoSum', 'add', 'add', 'add', 'find', 'find'],
  inputs = [[], [1], [3], [5], [4], [7]],
  outputs = [null, null, null, null, true, false];
run(ops, inputs, outputs);

var ops = ['TwoSum', 'add', 'find'],
  inputs = [[], [0], [0]],
  outputs = [null, null, false];
run(ops, inputs, outputs);

var ops = ['TwoSum', 'add', 'add', 'find'],
  inputs = [[], [0], [0], [0]],
  outputs = [null, null, null, true];
run(ops, inputs, outputs);

var ops = ['TwoSum', 'add', 'add', 'add', 'add', 'find', 'find', 'find', 'find'],
  inputs = [[], [0], [-1], [-1], [0], [-2], [0], [-1], [1]],
  outputs = [null, null, null, null, null, true, true, true, false];
run(ops, inputs, outputs);

var ops = ['TwoSum', 'add', 'add', 'add', 'add', 'find', 'find', 'find', 'find'],
  inputs = [[], [0], [-1], [-1], [0], [-2], [0], [-1], [1]],
  outputs = [null, null, null, null, null, true, true, true, false];
run(ops, inputs, outputs);
