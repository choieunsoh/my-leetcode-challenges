// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const a = 'a'.charCodeAt(0);
  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - a]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (counter[t.charCodeAt(i) - a]-- === 0) return false;
  }

  return true;
};

var s = 'anagram',
  t = 'nagaram';
var expect = true;
var result = isAnagram(s, t);
console.log(result, result === expect);

var s = 'rat',
  t = 'car';
expect = false;
var result = isAnagram(s, t);
console.log(result, result === expect);
