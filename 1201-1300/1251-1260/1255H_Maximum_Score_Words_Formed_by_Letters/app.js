// 1255. Maximum Score Words Formed by Letters
// https://leetcode.com/problems/maximum-score-words-formed-by-letters/description/
// T.C.: O(2^W * (L + A))
// S.C.: O(L + A)
/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  let result = 0;
  const w = words.length;
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < letters.length; i++) {
    counts[letters[i].charCodeAt(0) - a]++;
  }

  backtracking(w - 1, 0, new Array(26).fill(0));
  return result;

  function backtracking(wIndex, totalScore, subsetLetters) {
    if (wIndex === -1) {
      result = Math.max(result, totalScore);
      return;
    }

    // Skip
    backtracking(wIndex - 1, totalScore, subsetLetters);

    // Take
    for (let i = 0; i < words[wIndex].length; i++) {
      const c = words[wIndex].charCodeAt(i) - a;
      subsetLetters[c]++;
      totalScore += score[c];
    }
    if (isValidWord(subsetLetters)) {
      backtracking(wIndex - 1, totalScore, subsetLetters);
    }
    for (let i = 0; i < words[wIndex].length; i++) {
      const c = words[wIndex].charCodeAt(i) - a;
      subsetLetters[c]--;
      totalScore -= score[c];
    }
  }

  function isValidWord(subsetLetters) {
    for (let c = 0; c < 26; c++) {
      if (subsetLetters[c] > counts[c]) return false;
    }
    return true;
  }
};

var words = ['dog', 'cat', 'dad', 'good'],
  letters = ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
  score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var expected = 23;
var result = maxScoreWords(words, letters, score);
console.log(result, result === expected);

var words = ['xxxz', 'ax', 'bx', 'cx'],
  letters = ['z', 'a', 'b', 'c', 'x', 'x', 'x'],
  score = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10];
var expected = 27;
var result = maxScoreWords(words, letters, score);
console.log(result, result === expected);

var words = ['leetcode'],
  letters = ['l', 'e', 't', 'c', 'o', 'd'],
  score = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
var expected = 0;
var result = maxScoreWords(words, letters, score);
console.log(result, result === expected);
