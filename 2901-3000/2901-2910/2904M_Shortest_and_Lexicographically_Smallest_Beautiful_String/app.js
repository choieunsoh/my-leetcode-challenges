// 2904. Shortest and Lexicographically Smallest Beautiful String
// https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  if ([...s].filter((c) => c === '1').length < k) return '';
  let result = s;
  let count = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    count += s[right] - '0';
    while (count > k || s[left] === '0') {
      count -= s[left++] - '0';
    }
    if (count === k) {
      const t = s.slice(left, right + 1);
      if (t.length < result.length || (t.length === result.length && t < result)) {
        result = t;
      }
    }
  }
  return result;
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
