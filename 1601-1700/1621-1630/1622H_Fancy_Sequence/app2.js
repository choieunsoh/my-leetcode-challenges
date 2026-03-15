// 1622. Fancy Sequence
// https://leetcode.com/problems/fancy-sequence/description/
// T.C.: O(log n)
// S.C.: O(n)
const MOD = 1000000007n;

var Fancy = function () {
  this.v = [];
  this.a = 1n;
  this.b = 0n;
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function (val) {
  const adjustedVal = (((BigInt(val) - this.b + MOD) % MOD) * BigInt(this.inv(Number(this.a)))) % MOD;
  this.v.push(Number(adjustedVal));
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function (inc) {
  this.b = (this.b + BigInt(inc)) % MOD;
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function (m) {
  this.a = (this.a * BigInt(m)) % MOD;
  this.b = (this.b * BigInt(m)) % MOD;
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function (idx) {
  if (idx >= this.v.length) {
    return -1;
  }
  const ans = (((this.a * BigInt(this.v[idx])) % MOD) + this.b) % MOD;
  return Number(ans);
};

// fast exponentiation
Fancy.prototype.quickMul = function (x, y) {
  let ret = 1n;
  let cur = BigInt(x);
  let power = BigInt(y);
  while (power !== 0n) {
    if ((power & 1n) !== 0n) {
      ret = (ret * cur) % MOD;
    }
    cur = (cur * cur) % MOD;
    power >>= 1n;
  }
  return Number(ret);
};

// multiplicative inverse
Fancy.prototype.inv = function (x) {
  return this.quickMul(x, MOD - 2n);
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */

function run(ops, inputs, outputs) {
  const obj = new Fancy();
  for (var i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    const result = obj[op](...input) ?? null;
    console.log(i, op, result, result === expected);
  }
}

var ops = [
    'Fancy',
    'append',
    'addAll',
    'append',
    'multAll',
    'getIndex',
    'addAll',
    'append',
    'multAll',
    'getIndex',
    'getIndex',
    'getIndex',
  ],
  inputs = [[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]],
  outputs = [null, null, null, null, null, 10, null, null, null, 26, 34, 20];
run(ops, inputs, outputs);
