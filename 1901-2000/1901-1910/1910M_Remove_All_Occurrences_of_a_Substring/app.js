// 1910. Remove All Occurrences of a Substring
// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let idx = -1;
  const len = part.length;
  while ((idx = s.indexOf(part)) !== -1) {
    s = s.substring(0, idx) + s.substring(idx + len);
  }
  return s;
};

var s = 'daabcbaabcbc',
  part = 'abc';
var expected = 'dab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);

var s = 'axxxxyyyyb',
  part = 'xy';
var expected = 'ab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);
