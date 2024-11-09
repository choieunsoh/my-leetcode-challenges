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

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] !== '#') {
        const [canMoveVertically, canMoveHorizontally] = isValidMove(row, col, word);
        if (canMoveVertically) {
          if (moveVertical(row, col, word) || moveReverseVertical(row, col, word)) return true;
        }
        if (canMoveHorizontally) {
          if (moveHorizontal(row, col, word) || moveReverseHorizontal(row, col, word)) return true;
        }
      }
    }
  }

  return false;

  function moveVertical(row, col, word) {
    for (let i = 0; i < word.length; i++) {
      if (board[row + i][col] !== ' ' && board[row + i][col] !== word[i]) return false;
    }
    return true;
  }

  function moveReverseVertical(row, col, word) {
    const n = word.length;
    for (let i = 0; i < n; i++) {
      if (board[row + i][col] !== ' ' && board[row + i][col] !== word[n - 1 - i]) return false;
    }
    return true;
  }

  function moveHorizontal(row, col, word) {
    for (let i = 0; i < word.length; i++) {
      if (board[row][col + i] !== ' ' && board[row][col + i] !== word[i]) return false;
    }
    return true;
  }

  function moveReverseHorizontal(row, col, word) {
    const n = word.length;
    for (let i = 0; i < n; i++) {
      if (board[row][col + i] !== ' ' && board[row][col + i] !== word[n - 1 - i]) return false;
    }
    return true;
  }

  function isValidMove(row, col, word) {
    const n = word.length;
    let vCount = 0;
    for (let r = row; r < rows; r++) {
      if (board[r][col] === '#') break;
      vCount++;
    }

    let hCount = 0;
    for (let c = col; c < cols; c++) {
      if (board[row][c] === '#') break;
      hCount++;
    }
    return [
      vCount === n && (board[row - 1]?.[col] ?? '#') === '#' && (board[row + n]?.[col] ?? '#') === '#',
      hCount === n && (board[row][col - 1] ?? '#') === '#' && (board[row][col + n] ?? '#') === '#',
    ];
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
