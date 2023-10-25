// 398. Random Pick Index
// https://leetcode.com/problems/random-pick-index/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!this.map.has(num)) {
      this.map.set(num, []);
    }
    this.map.get(num).push(i);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const list = this.map.get(target);
  const index = (Math.random() * list.length) | 0;
  return list[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
var ops = ['Solution', 'pick', 'pick', 'pick'],
  inputs = [[[1, 2, 3, 3, 3]], [3], [1], [3]],
  outputs = [null, 4, 0, 2];
test(ops, inputs, outputs);

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'pick':
        result = obj.pick(...args);
        break;
      default:
        obj = new Solution(...args);
        break;
    }
    console.log(i, op, args, expected, result, result === expected);
  }
}
