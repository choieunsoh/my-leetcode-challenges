// 1756. Design Most Recently Used Queue
// https://leetcode.com/problems/design-most-recently-used-queue/description/
// T.C.: O(sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 */
var MRUQueue = function (n) {
  this.data = [];
  this.index = [];
  this.totalElements = n;
  this.bucketSize = Math.sqrt(n) | 0;

  for (let number = 1; number <= n; number++) {
    const bucketIndex = (number - 1) / this.bucketSize;
    if (bucketIndex === this.data.length) {
      this.data.push([]);
      this.index.push(number);
    }
    this.data[this.data.length - 1].push(number);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  const bucketIndex = this._upperBound(this.index, k) - 1;
  const element = this.data[bucketIndex][k - this.index[bucketIndex]];
  this.data[bucketIndex].splice(k - this.index[bucketIndex], 1);

  for (let i = bucketIndex + 1; i < this.index.length; ++i) {
    this.index[i] = this.index[i] - 1;
  }

  if (this.data[this.data.length - 1].length >= this.bucketSize) {
    this.data.push([]);
    this.index.push(this.totalElements);
  }
  this.data[this.data.length - 1].push(element);

  if (this.data[bucketIndex].length === 0) {
    this.data.splice(bucketIndex, 1);
    this.index.splice(bucketIndex, 1);
  }
  return element;
};

MRUQueue.prototype._upperBound = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */

function run(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'MRUQueue') {
      obj = new MRUQueue(...args);
    } else {
      const expected = outputs[i];
      const result = obj[ops[i]](...args) ?? null;
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = ['MRUQueue', 'fetch', 'fetch', 'fetch', 'fetch'],
  inputs = [[8], [3], [5], [2], [8]],
  outputs = [null, 3, 6, 2, 2];
run(ops, inputs, outputs);
