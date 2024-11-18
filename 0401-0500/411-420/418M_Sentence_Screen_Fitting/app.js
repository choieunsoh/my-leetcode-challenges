// 418. Sentence Screen Fitting
// https://leetcode.com/problems/sentence-screen-fitting/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function (sentence, rows, cols) {
  const sentenceStr = sentence.join(' ') + ' ';
  const sentenceLength = sentenceStr.length;
  let totalChars = 0;
  for (let i = 0; i < rows; i++) {
    totalChars += cols;
    if (sentenceStr[totalChars % sentenceLength] === ' ') {
      totalChars++;
    } else {
      while (totalChars > 0 && sentenceStr[(totalChars - 1) % sentenceLength] !== ' ') {
        totalChars--;
      }
    }
  }

  return Math.floor(totalChars / sentenceLength);
};

var sentence = ['hello', 'world'],
  rows = 2,
  cols = 8;
var expected = 1;
var result = wordsTyping(sentence, rows, cols);
console.log(result, result === expected);

var sentence = ['a', 'bcd', 'e'],
  rows = 3,
  cols = 6;
var expected = 2;
var result = wordsTyping(sentence, rows, cols);
console.log(result, result === expected);

var sentence = ['i', 'had', 'apple', 'pie'],
  rows = 4,
  cols = 5;
var expected = 1;
var result = wordsTyping(sentence, rows, cols);
console.log(result, result === expected);

var sentence = ['f', 'p', 'a'],
  rows = 8,
  cols = 7;
var expected = 10;
var result = wordsTyping(sentence, rows, cols);
console.log(result, result === expected);

var sentence = ['a', 'b', 'c'],
  rows = 3,
  cols = 1;
var expected = 1;
var result = wordsTyping(sentence, rows, cols);
console.log(result, result === expected);
