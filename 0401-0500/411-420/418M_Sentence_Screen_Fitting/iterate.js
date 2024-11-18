// 418. Sentence Screen Fitting
// https://leetcode.com/problems/sentence-screen-fitting/description/
// T.C.: O(rows+(cols*averageWordLength))
// S.C.: O(1)
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function (sentence, rows, cols) {
  let rowsLeft = rows;
  let wordIndex = 0;
  let times = 0;
  while (rowsLeft > 0) {
    rowsLeft--;
    let colsLeft = cols;
    while (colsLeft > 0) {
      const wordLength = sentence[wordIndex].length;
      if (wordLength <= colsLeft) {
        colsLeft -= wordLength + 1;
        wordIndex = (wordIndex + 1) % sentence.length;
        if (wordIndex === 0) {
          times++;
        }
      } else {
        break;
      }
    }
    // Repeat optimization
    if (wordIndex === 0) {
      return Math.floor((times * rows) / (rows - rowsLeft));
    }
  }
  return times;
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
