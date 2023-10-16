// 1160. Find Words That Can Be Formed by Characters
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let result = 0;
  const charsMap = buildMap(chars);
  for (const word of words) {
    const wordMap = buildMap(word);
    let valid = true;
    for (const char of word) {
      const charTotal = charsMap.get(char) ?? 0;
      const charNeeded = wordMap.get(char) ?? 0;
      if (charNeeded > charTotal) {
        valid = false;
        break;
      }
    }
    if (valid) result += word.length;
  }
  return result;

  function buildMap(chars) {
    const charsMap = new Map();
    for (const char of chars) {
      const count = charsMap.get(char) ?? 0;
      charsMap.set(char, count + 1);
    }
    return charsMap;
  }
};

var words = ['cat', 'bt', 'hat', 'tree'],
  chars = 'atach';
var expected = 6;
var result = countCharacters(words, chars);
console.log(result, result === expected);

var words = ['hello', 'world', 'leetcode'],
  chars = 'welldonehoneyr';
var expected = 10;
var result = countCharacters(words, chars);
console.log(result, result === expected);
