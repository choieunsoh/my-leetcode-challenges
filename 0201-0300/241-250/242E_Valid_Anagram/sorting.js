// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const S = s.split('').sort().join('');
  const T = t.split('').sort().join('');
  return S === T;
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
