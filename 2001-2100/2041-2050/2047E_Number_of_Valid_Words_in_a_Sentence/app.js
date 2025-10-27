// 2047. Number of Valid Words in a Sentence
// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  const regex = /^([a-z]+(-?[a-z]+)?)?[!\.,]?$/;
  const tokens = sentence.trim().split(/\s+/);
  let count = 0;
  for (const token of tokens) {
    if (token.match(regex)) {
      count++;
    }
  }
  return count;
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
