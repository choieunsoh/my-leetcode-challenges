// 3333. Find the Original Typed String II
// https://leetcode.com/problems/find-the-original-typed-string-ii/description/
// T.C.: O(n*k^2)
// S.C.: O(k)
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function (word, k) {
  const MOD = 1e9 + 7;
  const n = word.length;
  let count = 1;
  const freq = [];

  for (let i = 1; i < n; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    } else {
      freq.push(count);
      count = 1;
    }
  }
  freq.push(count);

  let result = 1;
  for (const occ of freq) {
    result = (result * occ) % MOD;
  }

  if (freq.length >= k) {
    return result;
  }

  let f = new Array(k).fill(0);
  let g = new Array(k).fill(1);
  f[0] = 1;

  for (let i = 0; i < freq.length; ++i) {
    const f_new = new Array(k).fill(0);
    for (let j = 1; j < k; ++j) {
      f_new[j] = g[j - 1];
      if (j - freq[i] - 1 >= 0) {
        f_new[j] = (f_new[j] - g[j - freq[i] - 1] + MOD) % MOD;
      }
    }

    const g_new = new Array(k).fill(0);
    g_new[0] = f_new[0];
    for (let j = 1; j < k; ++j) {
      g_new[j] = (g_new[j - 1] + f_new[j]) % MOD;
    }
    f = f_new;
    g = g_new;
  }
  return (result - g[k - 1] + MOD) % MOD;
};

var word = 'aabbccdd',
  k = 7;
var expected = 5;
var result = possibleStringCount(word, k);
console.log(result, result === expected);

var word = 'aabbccdd',
  k = 8;
var expected = 1;
var result = possibleStringCount(word, k);
console.log(result, result === expected);

var word = 'aaabbb',
  k = 3;
var expected = 8;
var result = possibleStringCount(word, k);
console.log(result, result === expected);
