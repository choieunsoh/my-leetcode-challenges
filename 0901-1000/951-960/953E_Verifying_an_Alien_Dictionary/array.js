// 953. Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const a = 'a'.charCodeAt(0);
  const map = Array(26);
  for (let i = 0; i < order.length; i++) {
    const ch = order.charCodeAt(i) - a;
    map[ch] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const firstWord = words[i];
    const secondWord = words[i + 1];
    for (let j = 0; j < firstWord.length; j++) {
      if (j >= secondWord.length) return false;
      if (firstWord[j] === secondWord[j]) continue;

      const firstChar = map[firstWord.charCodeAt(j) - a];
      const secondChar = map[secondWord.charCodeAt(j) - a];
      if (secondChar < firstChar) return false;
      break;
    }
  }
  return true;
};

var words = ['hello', 'leetcode'],
  order = 'hlabcdefgijkmnopqrstuvwxyz';
var expected = true;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);

var words = ['word', 'world', 'row'],
  order = 'worldabcefghijkmnpqstuvxyz';
var expected = false;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);

var words = ['apple', 'app'],
  order = 'abcdefghijklmnopqrstuvwxyz';
var expected = false;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);

var words = ['world', 'worlds', 'row', 'over'],
  order = 'worldabcefghijkmnpqstuvxyz';
var expected = false;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);
