// 843. Guess the Word
// https://leetcode.com/problems/guess-the-word/description/
// T.C.: O()
// S.C.: O()
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (words, master) {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const response = master.guess(randomWord);
  if (response == 6) {
    return;
  } else {
    const newWords = words.filter((item) => isThereSimilarChars(item, randomWord, response));

    return findSecretWord(newWords, master);
  }

  function isThereSimilarChars(word, guess, match) {
    if (guess === word) return false;
    let matches = 0;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess[i]) matches++;
    }
    return matches === match ? true : false;
  }
};

function Master() {
  this.guess = function (word) {
    return 0;
  };
}

var secret = 'acckzz',
  words = ['acckzz', 'ccbazz', 'eiowzz', 'abcczz'],
  allowedGuesses = 10;

var secret = 'hamada',
  words = ['hamada', 'khaled'],
  allowedGuesses = 10;
