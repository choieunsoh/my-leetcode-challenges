// 2719. Count of Integers
// https://leetcode.com/problems/count-of-integers/
const ll = BigInt;
const MOD = 1e9 + 7;
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_num, max_num) {
  const count2 = calc(num2, min_num, max_num);
  const count1 = calc((ll(num1) - 1n).toString(), min_num, max_num);
  return minusMod(count2, count1);

  function initialize4DArray(n, m, p, q) {
    const r = [];
    for (let i = 0; i < n; i++) {
      const a = [];
      for (let j = 0; j < m; j++) {
        const b = [];
        for (let k = 0; k < p; k++) {
          b.push(Array(q).fill(0));
        }
        a.push(b);
      }
      r.push(a);
    }
    return r;
  }
  function minusMod(x, y) {
    return (((x - y) % MOD) + MOD) % MOD;
  }

  function calc(s, l, r) {
    const n = s.length;
    const memo = initialize4DArray(n + 1, 2, 2, r + 1);
    for (let i = n; i >= 0; i--) {
      for (let isLimit = 1; isLimit >= 0; isLimit--) {
        for (let isNum = 1; isNum >= 0; isNum--) {
          for (let cnt = r; cnt >= 0; cnt--) {
            if (i == n) {
              memo[i][isLimit][isNum][cnt] = isNum && l <= cnt && cnt <= r ? 1 : 0;
              continue;
            }
            let res = 0;
            if (!isNum) res += memo[i + 1][0][0][0];
            const L = isNum ? 0 : 1;
            const R = isLimit ? s[i] - '0' : 9;
            for (let digit = L; digit <= R; digit++) {
              if (cnt + digit <= r) {
                res += memo[i + 1][isLimit && R == digit ? 1 : 0][1][cnt + digit];
                res %= MOD;
              }
            }
            memo[i][isLimit][isNum][cnt] = res % MOD;
          }
        }
      }
    }
    return memo[0][1][0][0];
  }
};

var num1 = '1',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 11;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '7',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '1',
  num2 = '5',
  min_num = 1,
  max_num = 5;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '6312',
  num2 = '9416',
  min_num = 29,
  max_num = 30;
var expected = 114;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '7809',
  num2 = '9275',
  min_num = 19,
  max_num = 22;
var expected = 429;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);
