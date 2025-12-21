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

  function convert(words) {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i]
        .split('')
        .map((ch) => map.get(ch))
        .join('');
    }
    return words;
  }

  const alienWords = convert(words);
  const sortedAlienWords = [...alienWords].sort();

  return alienWords.join() === sortedAlienWords.join();
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
