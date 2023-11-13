// 1763. Longest Nice Substring
// https://leetcode.com/problems/longest-nice-substring/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (s.length < 2) return '';
  const chars = [...s];
  const set = new Set(chars);
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) continue;
    const sub1 = longestNiceSubstring(s.substring(0, i));
    const sub2 = longestNiceSubstring(s.substring(i + 1));
    return sub1.length >= sub2.length ? sub1 : sub2;
  }
  return s;
};

var s = 'YazaAay';
var expected = 'aAa';
var result = longestNiceSubstring(s);
console.log(result, result === expected);

var s = 'Bb';
var expected = 'Bb';
var result = longestNiceSubstring(s);
console.log(result, result === expected);

var s = 'c';
var expected = '';
var result = longestNiceSubstring(s);
console.log(result, result === expected);
