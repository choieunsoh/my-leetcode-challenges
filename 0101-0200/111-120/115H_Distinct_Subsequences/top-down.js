// 115. Distinct Subsequences
// https://leetcode.com/problems/distinct-subsequences/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const memo = new Map();
  return dp(0, 0);

  function dp(i, j) {
    if (i === s.length || j === t.length || s.length - i < t.length - j) {
      return j === t.length ? 1 : 0;
    }

    const key = [i, j].toString();
    if (memo.has(key)) {
      return memo.get(key);
    }

    let result = dp(i + 1, j);
    if (s[i] === t[j]) {
      result += dp(i + 1, j + 1);
    }
    memo.set(key, result);
    return result;
  }
};

var s = 'rabbbit',
  t = 'rabbit';
var expected = 3;
var result = numDistinct(s, t);
console.log(result, result === expected);

var s = 'babgbag',
  t = 'bag';
var expected = 5;
var result = numDistinct(s, t);
console.log(result, result === expected);
