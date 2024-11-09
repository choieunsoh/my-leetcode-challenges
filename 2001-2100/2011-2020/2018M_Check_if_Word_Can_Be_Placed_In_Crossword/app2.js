// 2018. Check if Word Can Be Placed In Crossword
// https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/description/
// T.C.: O(m*n*w)
// S.C.: O(1)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    let s = '';
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== '#') {
        s += board[r][c];
      } else {
        if (isWordValid(s, word)) {
          return true;
        }
        s = '';
      }
    }
    if (isWordValid(s, word)) {
      return true;
    }
  }

  for (let c = 0; c < cols; c++) {
    let s = '';
    for (let r = 0; r < rows; r++) {
      if (board[r][c] !== '#') {
        s += board[r][c];
      } else {
        if (isWordValid(s, word)) {
          return true;
        }
        s = '';
      }
    }
    if (isWordValid(s, word)) {
      return true;
    }
  }

  return false;

  function isWordValid(source, word) {
    if (source.length !== word.length) {
      return false;
    }

    let i;
    for (i = 0; i < word.length; i++) {
      if (source[i] !== ' ' && source[i] !== word[i]) {
        break;
      }
    }
    if (i === word.length) {
      return true;
    }

    for (i = 0; i < word.length; i++) {
      if (source[i] !== ' ' && source[i] !== word[word.length - i - 1]) {
        break;
      }
    }
    return i === word.length;
  }
};

var board = [
    ['#', ' ', '#'],
    [' ', ' ', '#'],
    ['#', 'c', ' '],
  ],
  word = 'abc';
var expected = true;
var result = placeWordInCrossword(board, word);
console.log(result, result === expected);

var board = [
    [' ', '#', 'a'],
    [' ', '#', 'c'],
    [' ', '#', 'a'],
  ],
  word = 'ac';
var expected = false;
var result = placeWordInCrossword(board, word);
console.log(result, result === expected);

var board = [
    ['#', ' ', '#'],
    [' ', ' ', '#'],
    ['#', ' ', 'c'],
  ],
  word = 'ca';
var expected = true;
var result = placeWordInCrossword(board, word);
console.log(result, result === expected);
