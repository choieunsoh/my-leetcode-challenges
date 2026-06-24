// 3700. Number of ZigZag Arrays II
// https://leetcode.com/problems/number-of-zigzag-arrays-ii/description/
// T.C.: O(m^3 * log n)
// S.C.: O(m^2)

const MOD = 1_000_000_007n;

/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function (n, l, r) {
  const m = r - l + 1;
  if (n === 1) return m;

  const u = new Matrix(2 * m, 2 * m);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      u.set(i, j + m, 1n);
    }
    for (let j = i + 1; j < m; j++) {
      u.set(i + m, j, 1n);
    }
  }

  let dp = new Matrix(1, 2 * m);
  for (let i = 0; i < 2 * m; i++) {
    dp.set(0, i, 1n);
  }

  dp = u.powMul(BigInt(n - 1), dp);

  let result = 0n;
  for (let i = 0; i < 2 * m; i++) {
    result = (result + dp.get(0, i)) % MOD;
  }

  return Number(result);
};

class Matrix {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.data = new BigInt64Array(n * m);
  }

  get(i, j) {
    return this.data[i * this.m + j];
  }

  set(i, j, val) {
    this.data[i * this.m + j] = val;
  }

  mul(b) {
    const res = new Matrix(this.n, b.m);

    for (let i = 0; i < this.n; i++) {
      for (let k = 0; k < this.m; k++) {
        const r = this.get(i, k);
        if (r === 0n) continue;

        for (let j = 0; j < b.m; j++) {
          res.set(i, j, (res.get(i, j) + r * b.get(k, j)) % MOD);
        }
      }
    }
    return res;
  }

  powMul(exp, res) {
    let base = new Matrix(this.n, this.m);
    base.data = new BigInt64Array(this.data);

    while (exp > 0n) {
      if ((exp & 1n) === 1n) {
        res = res.mul(base);
      }
      base = base.mul(base);
      exp >>= 1n;
    }

    return res;
  }
}

var n = 3,
  l = 4,
  r = 5;
var expected = 2;
var result = zigZagArrays(n, l, r);
console.log(result, result === expected);

var n = 3,
  l = 1,
  r = 3;
var expected = 10;
var result = zigZagArrays(n, l, r);
console.log(result, result === expected);
