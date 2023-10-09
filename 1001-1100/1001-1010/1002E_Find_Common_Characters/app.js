// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let seen = new Map();
  for (const char of words[0]) {
    const count = seen.get(char) ?? 0;
    seen.set(char, count + 1);
  }

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const map = new Map();
    for (const char of word) {
      const count = map.get(char) ?? 0;
      map.set(char, count + 1);
    }

    for (const [char] of seen) {
      if (!map.has(char)) {
        seen.delete(char);
      } else {
        seen.set(char, Math.min(seen.get(char), map.get(char)));
      }
    }
  }

  let result = '';
  for (const [char, count] of seen) {
    result += char.repeat(count);
  }
  return result.split('');
};

var words = ['bella', 'label', 'roller'];
var expected = ['e', 'l', 'l'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['cool', 'lock', 'cook'];
var expected = ['c', 'o'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());
