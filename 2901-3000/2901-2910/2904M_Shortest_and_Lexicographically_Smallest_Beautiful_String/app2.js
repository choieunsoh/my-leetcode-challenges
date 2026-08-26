// 2904. Shortest and Lexicographically Smallest Beautiful String
// https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/description/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  for (let m = k; m <= s.length; m++) {
    let result = '';
    for (let i = m; i <= s.length; i++) {
      const t = s.slice(i - m, i);
      if ((!result || t < result) && [...t].filter((c) => c === '1').length === k) {
        result = t;
      }
    }
    if (result) return result;
  }
  return '';
};

var s = '100011001',
  k = 3;
var expected = '11001';
var result = shortestBeautifulSubstring(s, k);
console.log(result, result === expected);

var s = '1011',
  k = 2;
var expected = '11';
var result = shortestBeautifulSubstring(s, k);
console.log(result, result === expected);

var s = '000',
  k = 1;
var expected = '';
var result = shortestBeautifulSubstring(s, k);
console.log(result, result === expected);
