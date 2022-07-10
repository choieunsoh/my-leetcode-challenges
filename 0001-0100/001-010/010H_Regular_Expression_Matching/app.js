// https://leetcode.com/problems/regular-expression-matching/
// 10. Regular Expression Matching
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const dp = new Map();

  function dfs(i = 0, j = 0) {
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;

    const key = `${i}-${j}`;
    if (dp.has(key)) return dp.get(key);

    const match = i < s.length && (s[i] === p[j] || p[j] === '.');
    let result = false;
    if (j < p.length - 1 && p[j + 1] === '*') {
      result = dfs(i, j + 2) || (match && dfs(i + 1, j));
    } else {
      result = match && dfs(i + 1, j + 1);
    }

    dp.set(key, result);
    return result;
  }

  return dfs();
};

var s = 'aa',
  p = 'a';
var expected = false;
console.log(isMatch(s, p), expected);

var s = 'aa',
  p = 'a*';
var expected = true;
console.log(isMatch(s, p), expected);

var s = 'ab',
  p = '.*';
var expected = true;
console.log(isMatch(s, p), expected);
