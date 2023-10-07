// 528. Random Pick with Weight
// https://leetcode.com/problems/random-pick-with-weight/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.nums = [];
  let sum = 0;
  for (let i = 0; i < w.length; i++) {
    sum += w[i];
    this.nums.push(sum);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.random() * this.nums[this.nums.length - 1];
  let left = 0;
  let right = this.nums.length - 1;
  let result = right;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (this.nums[mid] > target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
/*
Input
["Solution","pickIndex"]
[[[1]],[]]
Output
[null,0]

Input
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output
[null,1,1,1,1,0]
*/
function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const expected = outputs[i];
    let result = null;
    switch (ops[i]) {
      case 'pickIndex':
        result = obj.pickIndex();
        break;
      default:
        const w = inputs[i][0];
        obj = new Solution(w);
        break;
    }
    console.log(i, ops[i], expected, result, result === expected);
  }
  console.log();
}

var ops = ['Solution', 'pickIndex'];
var inputs = [[[1]], []];
var outputs = [null, 0];
test(ops, inputs, outputs);

var ops = ['Solution', 'pickIndex', 'pickIndex', 'pickIndex', 'pickIndex', 'pickIndex'];
var inputs = [[[1, 3]], [], [], [], [], []];
var outputs = [null, 1, 1, 1, 1, 0];
test(ops, inputs, outputs);
