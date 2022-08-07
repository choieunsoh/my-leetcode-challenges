// https://leetcode.com/problems/shortest-completing-word/
// 748. Shortest Completing Word
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let shortestWord = '';
  const letters = new Map();
  for (let i = 0; i < licensePlate.length; i++) {
    const c = licensePlate[i].toLowerCase();
    if (c >= 'a' && c <= 'z') {
      letters.set(c, (letters.get(c) ?? 0) + 1);
    }
  }
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const map = new Map(letters);
    for (let j = 0; j < word.length; j++) {
      const c = word[j];
      if (map.has(c)) {
        map.set(c, map.get(c) - 1);
        if (map.get(c) === 0) {
          map.delete(c);
        }
      }
      if (map.size === 0) {
        if (shortestWord.length === 0 || word.length < shortestWord.length) {
          shortestWord = word;
        }
      }
    }
  }

  return shortestWord;
};

var licensePlate = '1s3 PSt',
  words = ['step', 'steps', 'stripe', 'stepple'];
var expected = 'steps';
var actual = shortestCompletingWord(licensePlate, words);
console.log(actual, actual === expected);

var licensePlate = '1s3 456',
  words = ['looks', 'pest', 'stew', 'show'];
var expected = 'pest';
var actual = shortestCompletingWord(licensePlate, words);
console.log(actual, actual === expected);
