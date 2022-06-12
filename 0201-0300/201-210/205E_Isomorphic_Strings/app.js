// https://leetcode.com/problems/isomorphic-strings/
// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const seen = new Set();
  const map = {};
  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      if (seen.has(t[i])) return false;
      map[s[i]] = t[i];
      seen.add(t[i]);
    } else if (map[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};

var s = 'egg',
  t = 'add',
  expected = true;
console.log(isIsomorphic(s, t), expected);

var s = 'foo',
  t = 'bar',
  expected = false;
console.log(isIsomorphic(s, t), expected);

var s = 'paper',
  t = 'title',
  expected = true;
console.log(isIsomorphic(s, t), expected);

var s = 'badc',
  t = 'baba',
  expected = false;
console.log(isIsomorphic(s, t), expected);
