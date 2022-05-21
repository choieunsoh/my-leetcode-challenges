// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const seen = {};
  for (let i = 0; i < s.length; i++) {
    seen[s[i]] = (seen[s[i]] ?? 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!seen[t[i]]) return false;
    seen[t[i]]--;
  }

  return true;
};

var s = 'anagram',
  t = 'nagaram';
var expect = true;
var result = isAnagram(s);
console.log(result, result === expect);

var s = 'rat',
  t = 'car';
expect = false;
var result = isAnagram(s);
console.log(result, result === expect);
