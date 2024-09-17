// 884. Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(' ');
  s2 = s2.split(' ');
  const words = new Map();
  for (let i = 0; i < s1.length; i++) {
    const word = s1[i];
    words.set(word, (words.get(word) ?? 0) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
    const word = s2[i];
    words.set(word, (words.get(word) ?? 0) + 1);
  }

  const result = [];
  for (const [word, count] of words) {
    if (count === 1) result.push(word);
  }
  return result;
};

var s1 = 'this apple is sweet',
  s2 = 'this apple is sour';
var expected = ['sweet', 'sour'];
var result = uncommonFromSentences(s1, s2);
console.log(result, result.join() === expected.join());

var s1 = 'apple apple',
  s2 = 'banana';
var expected = ['banana'];
var result = uncommonFromSentences(s1, s2);
console.log(result, result.join() === expected.join());
