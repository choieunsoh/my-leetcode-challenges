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
  const reversedWord = word.split('').reverse().join(''); // Reversed word for easier checking

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] !== '#') {
        if (
          canPlaceWord(row, col, word, true) ||
          canPlaceWord(row, col, reversedWord, true) ||
          canPlaceWord(row, col, word, false) ||
          canPlaceWord(row, col, reversedWord, false)
        ) {
          return true;
        }
      }
    }
  }
  return false;

  /**
   * Checks if the word can be placed starting from (row, col) in either direction (horizontal or vertical).
   * @param {number} row - Starting row index
   * @param {number} col - Starting column index
   * @param {string} word - Word to place
   * @param {boolean} isHorizontal - Direction flag (true for horizontal, false for vertical)
   * @return {boolean} - Whether the word can be placed in the specified position and direction
   */
  function canPlaceWord(row, col, word, isHorizontal) {
    const n = word.length;

    if (isHorizontal) {
      if (
        col + n > cols ||
        (col > 0 && board[row][col - 1] !== '#') ||
        (col + n < cols && board[row][col + n] !== '#')
      ) {
        return false;
      }
    } else {
      if (
        row + n > rows ||
        (row > 0 && board[row - 1][col] !== '#') ||
        (row + n < rows && board[row + n][col] !== '#')
      ) {
        return false;
      }
    }

    for (let i = 0; i < n; i++) {
      const cell = isHorizontal ? board[row][col + i] : board[row + i][col];
      if (cell !== ' ' && cell !== word[i]) {
        return false;
      }
    }
    return true;
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
