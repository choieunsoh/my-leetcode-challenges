// 30. Substring with Concatenation of All Words
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordCounter = new Map();
  for (const word of words) {
    const count = wordCounter.get(word) ?? 0;
    wordCounter.set(word, count + 1);
  }

  const result = [];
  const sLen = s.length;
  const wordLen = words[0].length;
  const concatWordLen = words.length * wordLen;
  for (let i = 0; i < sLen - concatWordLen + 1; i++) {
    const str = s.substring(i, i + concatWordLen);
    if (isConcat(str)) {
      result.push(i);
    }
  }

  return result;

  function isConcat(str) {
    const wordUsed = new Map();
    for (let i = 0; i < str.length; i += wordLen) {
      const word = str.substring(i, i + wordLen);
      const count = (wordUsed.get(word) ?? 0) + 1;
      if (!wordCounter.has(word) || count > wordCounter.get(word)) {
        return false;
      }
      wordUsed.set(word, count);
    }
    return true;
  }
};

var s = 'barfoothefoobarman',
  words = ['foo', 'bar'];
var expected = [0, 9];
var result = findSubstring(s, words);
console.log(result, result.join() === expected.join());

var s = 'wordgoodgoodgoodbestword',
  words = ['word', 'good', 'best', 'word'];
var expected = [];
var result = findSubstring(s, words);
console.log(result, result.join() === expected.join());

var s = 'barfoofoobarthefoobarman',
  words = ['bar', 'foo', 'the'];
var expected = [6, 9, 12];
var result = findSubstring(s, words);
console.log(result, result.join() === expected.join());
