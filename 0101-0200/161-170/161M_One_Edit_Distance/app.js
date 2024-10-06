// 161. One Edit Distance
// https://leetcode.com/problems/one-edit-distance/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (s.length > t.length) return isOneEditDistance(t, s);

  const ns = s.length;
  const nt = t.length;
  if (nt - ns > 1) return false;

  for (let i = 0; i < ns; i++) {
    if (s[i] === t[i]) continue;

    if (ns === nt) {
      return s.slice(i + 1) === t.slice(i + 1);
    }

    return s.slice(i) === t.slice(i + 1);
  }
  return ns + 1 === nt;
};

var s = 'ab',
  t = 'acb';
var expected = true;
var result = isOneEditDistance(s, t);
console.log(result, result === expected);

var s = '',
  t = '';
var expected = false;
var result = isOneEditDistance(s, t);
console.log(result, result === expected);
