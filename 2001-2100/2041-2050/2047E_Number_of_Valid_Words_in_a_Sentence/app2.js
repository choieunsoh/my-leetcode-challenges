// 2047. Number of Valid Words in a Sentence
// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  const tokens = sentence.trim().split(/\s+/);
  let count = 0;
  for (const token of tokens) {
    if (isValid(token)) {
      count++;
    }
  }
  return count;

  function isValid(token) {
    let hyphenCount = 0;
    let punctuationCount = 0;
    for (let i = 0; i < token.length; i++) {
      const c = token[i];
      if (c >= '0' && c <= '9') return false;
      if (c === '-') {
        if (
          ++hyphenCount > 1 ||
          i === 0 ||
          i === token.length - 1 ||
          !(/[a-z]/.test(token[i - 1]) && /[a-z]/.test(token[i + 1]))
        )
          return false;
      }
      if (['!', '.', ','].includes(c)) {
        if (++punctuationCount > 1 || i !== token.length - 1) return false;
      }
    }
    return true;
  }
};

var sentence = 'cat and  dog';
var expected = 3;
var result = countValidWords(sentence);
console.log(result, result === expected);

var sentence = '!this  1-s b8d!';
var expected = 0;
var result = countValidWords(sentence);
console.log(result, result === expected);

var sentence = 'alice and  bob are playing stone-game10';
var expected = 5;
var result = countValidWords(sentence);
console.log(result, result === expected);

var sentence = '!this  1-s b8d! 1234 -ab ab- ab.! ! a--b --- !!! a-!b bad!';
var expected = 2;
var result = countValidWords(sentence);
console.log(result, result === expected);

var sentence = '!g 3 !sy ';
var expected = 0;
var result = countValidWords(sentence);
console.log(result, result === expected);
