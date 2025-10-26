// 2068. Check Whether Two Strings are Almost Equivalent
// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    counts[word1.charCodeAt(i) - a]++;
  }
  for (let i = 0; i < word2.length; i++) {
    counts[word2.charCodeAt(i) - a]--;
  }
  for (let i = 0; i < 26; i++) {
    if (Math.abs(counts[i]) > 3) {
      return false;
    }
  }
  return true;
};

var word1 = 'aaaa',
  word2 = 'bccb';
var expected = false;
var result = checkAlmostEquivalent(word1, word2);
console.log(result, result === expected);

var word1 = 'abcdeef',
  word2 = 'abaaacc';
var expected = true;
var result = checkAlmostEquivalent(word1, word2);
console.log(result, result === expected);

var word1 = 'cccddabba',
  word2 = 'babababab';
var expected = true;
var result = checkAlmostEquivalent(word1, word2);
console.log(result, result === expected);
