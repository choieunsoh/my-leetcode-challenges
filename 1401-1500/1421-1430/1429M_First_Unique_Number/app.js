// 1429. First Unique Number
// https://leetcode.com/problems/first-unique-number/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.nums = new Set();
  this.duplicates = new Set();
  for (const num of nums) {
    this.add(num);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  if (this.nums.size === 0) return -1;
  return this.nums.values().next().value;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (this.duplicates.has(value)) return;
  if (this.nums.has(value)) {
    this.duplicates.add(value);
    this.nums.delete(value);
  } else {
    this.nums.add(value);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

function run(ops, inputs, outputs) {
  const obj = new FirstUnique(...inputs[0]);
  for (let i = 1; i < ops.length; i++) {
    const expected = outputs[i];
    const result = obj[ops[i]](...inputs[i]) ?? null;
    console.log(i, ops[i], inputs[i], result, result === expected);
  }
  console.log();
}

var ops = [
    'FirstUnique',
    'showFirstUnique',
    'add',
    'showFirstUnique',
    'add',
    'showFirstUnique',
    'add',
    'showFirstUnique',
  ],
  inputs = [[[2, 3, 5]], [], [5], [], [2], [], [3], []],
  outputs = [null, 2, null, 2, null, 3, null, -1];
run(ops, inputs, outputs);

var ops = ['FirstUnique', 'showFirstUnique', 'add', 'add', 'add', 'add', 'add', 'showFirstUnique'],
  inputs = [[[7, 7, 7, 7, 7, 7]], [], [7], [3], [3], [7], [17], []],
  outputs = [null, -1, null, null, null, null, null, 17];
run(ops, inputs, outputs);

var ops = ['FirstUnique', 'showFirstUnique', 'add', 'showFirstUnique'],
  inputs = [[[809]], [], [809], []],
  outputs = [null, 809, null, -1];
run(ops, inputs, outputs);
