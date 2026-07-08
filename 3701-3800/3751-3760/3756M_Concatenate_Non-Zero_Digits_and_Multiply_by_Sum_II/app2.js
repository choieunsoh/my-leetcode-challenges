// 3756. Concatenate Non-Zero Digits and Multiply by Sum II
// https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
const nMax = 1e5;
const mod = 1e9 + 7;
const bMod = BigInt(mod);
const powMod = new BigInt64Array(nMax + 1).fill(1n, 0, 1);
for (let i = 1; i <= nMax; i++) {
  powMod[i] = (powMod[i - 1] * 10n) % bMod;
}

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
  const n = s.length;
  const m = queries.length;
  const sumPfs = new Uint32Array(n + 1);
  const concatPfs = new Uint32Array(n + 1);
  const countPfs = new Uint32Array(n + 1);
  for (let i = 0; i < n; i++) {
    const x = ~~s[i];
    sumPfs[i + 1] = sumPfs[i] + x;
    if (x) {
      concatPfs[i + 1] = (concatPfs[i] * 10 + x) % mod;
      countPfs[i + 1] = countPfs[i] + 1;
    } else {
      concatPfs[i + 1] = concatPfs[i];
      countPfs[i + 1] = countPfs[i];
    }
  }

  for (let q = 0; q < m; q++) {
    const [ql, qr] = queries[q];
    const count = countPfs[qr + 1] - countPfs[ql];
    const sum = sumPfs[qr + 1] - sumPfs[ql];
    const concatR = concatPfs[qr + 1];
    const concatL = Number((BigInt(concatPfs[ql]) * powMod[count]) % bMod);
    const concat = (concatR - concatL + mod) % mod;
    queries[q] = (concat * sum) % mod;
  }
  return queries;
};

var s = '10203004',
  queries = [
    [0, 7],
    [1, 3],
    [4, 6],
  ];
var expected = [12340, 4, 9];
var result = sumAndMultiply(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '1000',
  queries = [
    [0, 3],
    [1, 1],
  ];
var expected = [1, 0];
var result = sumAndMultiply(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '9876543210',
  queries = [[0, 9]];
var expected = [444444137];
var result = sumAndMultiply(s, queries);
console.log(result, result.toString() === expected.toString());
