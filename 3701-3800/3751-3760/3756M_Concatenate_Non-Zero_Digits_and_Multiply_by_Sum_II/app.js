// 3756. Concatenate Non-Zero Digits and Multiply by Sum II
// https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
const MOD = 1000000007;
const MAX_N = 100001;
const pow10 = new Array(MAX_N);

pow10[0] = 1n;
for (let i = 1; i < MAX_N; ++i) {
  pow10[i] = (pow10[i - 1] * 10n) % BigInt(MOD);
}

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
  const n = s.length;
  const sum = new Array(n + 1).fill(0);
  const x = new Array(n + 1).fill(0n);
  const cnt = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    const d = s.charCodeAt(i) - 48;
    sum[i + 1] = sum[i] + d;
    x[i + 1] = d > 0 ? (x[i] * 10n + BigInt(d)) % BigInt(MOD) : x[i];
    cnt[i + 1] = cnt[i] + (d > 0 ? 1 : 0);
  }
  const m = queries.length;
  const result = new Array(m);
  for (let i = 0; i < m; ++i) {
    const l = queries[i][0];
    const r = queries[i][1] + 1;
    const length = cnt[r] - cnt[l];
    const val_x = (x[r] - ((x[l] * pow10[length]) % BigInt(MOD)) + BigInt(MOD)) % BigInt(MOD);
    const val_sum = BigInt(sum[r] - sum[l]);
    result[i] = Number((val_x * val_sum) % BigInt(MOD));
  }
  return result;
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
