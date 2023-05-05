// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const seen = new Set();
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const chS = s.charAt(i);
    const chT = t.charAt(i);
    if (map.has(chS)) {
      if (map.get(chS) !== chT) return false;
    } else {
      if (seen.has(chT)) return false;
      seen.add(chT);
      map.set(chS, chT);
    }
  }
  return true;
};

var s = 'egg',
  t = 'add';
var expected = true;
var result = isIsomorphic(s, t);
console.log(result, result === expected);

var s = 'foo',
  t = 'bar';
var expected = false;
var result = isIsomorphic(s, t);
console.log(result, result === expected);

var s = 'paper',
  t = 'title';
var expected = true;
var result = isIsomorphic(s, t);
console.log(result, result === expected);
