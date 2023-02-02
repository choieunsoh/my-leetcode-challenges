// https://leetcode.com/problems/verifying-an-alien-dictionary/
// 953. Verifying an Alien Dictionary
var isAlienSorted = function (words: string[], order: string): boolean {
  const charMap = Array(26);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < order.length; i++) {
    const charIndex = order.charCodeAt(i) - a;
    charMap[charIndex] = i;
  }

  for (let i = 1; i < words.length; i++) {
    const firstWord = words[i - 1];
    const secondWord = words[i];
    for (let j = 0; j < firstWord.length; j++) {
      if (j >= secondWord.length) return false;
      if (firstWord[j] === secondWord[j]) continue;

      const firstChar = charMap[firstWord.charCodeAt(j) - a];
      const secondChar = charMap[secondWord.charCodeAt(j) - a];
      if (firstChar > secondChar) return false;
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

var words = ['apple', 'apple'],
  order = 'abcdefghijklmnopqrstuvwxyz';
var expected = true;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);

var words = ['world', 'worlds', 'row', 'over'],
  order = 'worldabcefghijkmnpqstuvxyz';
var expected = false;
var result = isAlienSorted(words, order);
console.log(result, expected, result === expected);
