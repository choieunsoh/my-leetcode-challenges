// https://leetcode.com/problems/keyboard-row/
// 500. Keyboard Row
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  const map = new Map();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    for (let j = 0; j < row.length; j++) {
      map.set(row[j], i);
    }
  }

  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    const firstCharRow = map.get(word[0]);
    let flag = true;
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (map.get(char) !== firstCharRow) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(words[i]);
    }
  }
  return result;
};

var words = ['Hello', 'Alaska', 'Dad', 'Peace'];
var expected = ['Alaska', 'Dad'];
var result = findWords(words);
console.log(result, result.join() === expected.join());

var words = ['omk'];
var expected = [];
var result = findWords(words);
console.log(result, result.join() === expected.join());

var words = ['adsdf', 'sfd'];
var expected = ['adsdf', 'sfd'];
var result = findWords(words);
console.log(result, result.join() === expected.join());
