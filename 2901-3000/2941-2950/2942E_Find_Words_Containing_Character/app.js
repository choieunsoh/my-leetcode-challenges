// 2942. Find Words Containing Character
// https://leetcode.com/problems/find-words-containing-character/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.includes(x)) {
      result.push(i);
    }
  }
  return result;
};

var words = ['leet', 'code'],
  x = 'e';
var expected = [0, 1];
var result = findWordsContaining(words, x);
console.log(result, result.join() === expected.join());

var words = ['abc', 'bcd', 'aaaa', 'cbc'],
  x = 'a';
var expected = [0, 2];
var result = findWordsContaining(words, x);
console.log(result, result.join() === expected.join());

var words = ['abc', 'bcd', 'aaaa', 'cbc'],
  x = 'z';
var expected = [];
var result = findWordsContaining(words, x);
console.log(result, result.join() === expected.join());
