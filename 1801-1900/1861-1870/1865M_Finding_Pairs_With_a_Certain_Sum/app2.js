// 1865. Finding Pairs With a Certain Sum
// https://leetcode.com/problems/finding-pairs-with-a-certain-sum/description/
// T.C.: O(n+m+q1+n*q2)
// S.C.: O(n+m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.freq = new Map();
  for (const num of nums2) {
    this.freq.set(num, (this.freq.get(num) ?? 0) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const num = this.nums2[index];
  this.freq.set(num, this.freq.get(num) - 1);

  const newNum = num + val;
  this.freq.set(newNum, (this.freq.get(newNum) ?? 0) + 1);

  this.nums2[index] += val;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let count = 0;
  for (const num of this.nums1) {
    const diff = tot - num;
    if (this.freq.has(diff)) {
      count += this.freq.get(diff);
    }
  }
  return count;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i] ?? null;
    let result = null;
    switch (op) {
      case 'FindSumPairs':
        obj = new FindSumPairs(...input);
        break;
      case 'add':
        result = obj.add(...input) ?? null;
        break;
      case 'count':
        result = obj.count(...input);
        break;
    }
    console.log(i, op, result, expected, result === expected);
  }
}

var ops = ['FindSumPairs', 'count', 'add', 'count', 'count', 'add', 'add', 'count'],
  inputs = [
    [
      [1, 1, 2, 2, 2, 3],
      [1, 4, 5, 2, 5, 4],
    ],
    [7],
    [3, 2],
    [8],
    [4],
    [0, 1],
    [1, 1],
    [7],
  ],
  outputs = [null, 8, null, 2, 1, null, null, 11];
run(ops, inputs, outputs);
