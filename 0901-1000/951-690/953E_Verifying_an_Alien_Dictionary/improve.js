// https://leetcode.com/problems/verifying-an-alien-dictionary/
// 953. Verifying an Alien Dictionary
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], String.fromCharCode(i + 65));
  }

  for (let i = 1; i < words.length; i++) {
    const sorted = isSorted(words[i - 1], words[i]);
    if (!sorted) return false;
  }

  return true;

  function isSorted(first, second) {
    const length = Math.min(first.length, second.length);
    for (let i = 0; i < length; i++) {
      const firstChar = map.get(first[i]);
      const secondChar = map.get(second[i]);
      if (firstChar > secondChar) {
        return false;
      } else if (firstChar < secondChar) {
        return true;
      }
    }
    return first.length < second.length;
  }
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
