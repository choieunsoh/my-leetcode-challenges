// 170. Two Sum III - Data structure design
// https://leetcode.com/problems/two-sum-iii-data-structure-design/

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
  for (const [num] of this.nums) {
    const target = value - num;
    const count = this.nums.get(target) ?? 0;
    const needed = num === target ? 2 : 1;
    console.log(value, num, target, count, needed);
    if (count >= needed) return true;
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var ops = ['TwoSum', 'add', 'add', 'add', 'find', 'find'];
var inputs = [[], [1], [3], [5], [4], [7]];
var outputs = [null, null, null, null, true, false];
var twoSum = null;
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

var ops = ['TwoSum', 'add', 'find'];
var inputs = [[], [0], [0]];
var outputs = [null, null, false];
var twoSum = null;
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

var ops = ['TwoSum', 'add', 'add', 'find'];
var inputs = [[], [0], [0], [0]];
var outputs = [null, null, null, true];
var twoSum = null;
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

var ops = ['TwoSum', 'add', 'add', 'add', 'add', 'find', 'find', 'find', 'find'];
var inputs = [[], [0], [-1], [-1], [0], [-2], [0], [-1], [1]];
var outputs = [null, null, null, null, null, true, true, true, false];
var twoSum = null;
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
