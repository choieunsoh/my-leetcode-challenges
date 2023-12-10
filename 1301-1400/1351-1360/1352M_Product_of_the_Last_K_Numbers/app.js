// 1352. Product of the Last K Numbers
// https://leetcode.com/problems/product-of-the-last-k-numbers/
// T.C.: O(n)
// S.C.: O(n)

var ProductOfNumbers = function () {
  this.nums = [];
  this.lastProduct = 1;
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.nums.length = 0;
    this.lastProduct = 1;
  } else {
    this.lastProduct *= num;
    this.nums.push(this.lastProduct);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const n = this.nums.length;
  let i = n - k;
  if (i > 0) {
    return this.lastProduct / this.nums[i - 1];
  }
  if (i === 0) {
    return this.lastProduct;
  }
  return 0;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

function test(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'add':
        obj.add(args[0]);
        break;
      case 'getProduct':
        result = obj.getProduct(args[0]);
        break;
      default:
        obj = new ProductOfNumbers();
        break;
    }
    console.log(i, op, args, expected, result, result === expected);
  }
}

var ops = [
    'ProductOfNumbers',
    'add',
    'add',
    'add',
    'add',
    'add',
    'getProduct',
    'getProduct',
    'getProduct',
    'add',
    'getProduct',
  ],
  inputs = [[], [3], [0], [2], [5], [4], [2], [3], [4], [8], [2]],
  outputs = [null, null, null, null, null, null, 20, 40, 0, null, 32];
test(ops, inputs, outputs);
