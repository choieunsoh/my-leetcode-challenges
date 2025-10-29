// 1961. Check If String Is a Prefix of Array
// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let sIndex = 0;
  let wordIndex = 0;
  while (sIndex < s.length && wordIndex < words.length) {
    for (let charIndex = 0; charIndex < words[wordIndex].length; charIndex++) {
      if (s[sIndex] !== words[wordIndex][charIndex]) {
        return false;
      }
      sIndex++;
    }
    wordIndex++;
  }
  return sIndex === s.length;
};

var s = 'iloveleetcode',
  words = ['i', 'love', 'leetcode', 'apples'];
var expected = true;
var result = isPrefixString(s, words);
console.log(result, result === expected);

var s = 'iloveleetcode',
  words = ['apples', 'i', 'love', 'leetcode'];
var expected = false;
var result = isPrefixString(s, words);
console.log(result, result === expected);

var s = 'ccccccccc',
  words = ['c', 'cc'];
var expected = false;
var result = isPrefixString(s, words);
console.log(result, result === expected);
