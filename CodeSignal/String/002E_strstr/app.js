// strstr
// LC-28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * @param {string} s
 * @param {string} x
 * @return {number}
 */
function strstr(s, x) {
  const n = x.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== x[0]) continue;
    if (s[i + n - 1] !== x[n - 1]) continue;
    const sub = s.substring(i, i + n);
    if (sub === x) return i;
  }
  return -1;
}

var s = 'CodefightsIsAwesome',
  x = 'IA';
var expected = -1;
var result = strstr(s, x);
console.log(result, result === expected);

var s = 'CodefightsIsAwesome',
  x = 'IsA';
var expected = 10;
var result = strstr(s, x);
console.log(result, result === expected);
