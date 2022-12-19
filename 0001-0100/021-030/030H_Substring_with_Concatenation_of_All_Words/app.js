// 30. Substring with Concatenation of All Words
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const n = s.length;
  const w = words.length;
  const wordLength = words[0].length;
  const substringSize = wordLength * w;
  const wordCounter = new Map();
  for (const word of words) {
    const count = wordCounter.get(word) ?? 0;
    wordCounter.set(word, count + 1);
  }

  function slidingWindow(left) {
    const wordsFound = new Map();
    let wordsUsed = 0;
    let excessWord = false;

    for (let right = left; right <= n - wordLength; right += wordLength) {
      const str = s.substring(right, right + wordLength);
      if (!wordCounter.has(str)) {
        wordsFound.clear();
        wordsUsed = 0;
        excessWord = false;
        left = right + wordLength;
        continue;
      }

      while (right - left == substringSize || excessWord) {
        const str = s.substring(left, left + wordLength);
        left += wordLength;

        const count = wordsFound.get(str);
        wordsFound.set(str, count - 1);

        if (wordsFound.get(str) >= wordCounter.get(str)) {
          excessWord = false;
        } else {
          wordsUsed--;
        }
      }

      const count = wordsFound.get(str) ?? 0;
      wordsFound.set(str, count + 1);

      if (wordsFound.get(str) <= wordCounter.get(str)) {
        wordsUsed++;
      } else {
        excessWord = true;
      }

      if (wordsUsed == w && !excessWord) {
        result.push(left);
      }
    }
  }

  const result = [];
  for (let i = 0; i < wordLength; i++) {
    slidingWindow(i);
  }

  return result;
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

var s = 'wordgoodgoodgoodbestword',
  words = ['word', 'good', 'best', 'good'];
var expected = [8];
var result = findSubstring(s, words);
console.log(result, result.join() === expected.join());
