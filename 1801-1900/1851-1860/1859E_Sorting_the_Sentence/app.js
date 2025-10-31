// 1859. Sorting the Sentence
// https://leetcode.com/problems/sorting-the-sentence/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = [];
  const splittedWords = s.split(' ');
  for (const word of splittedWords) {
    const index = Number(word[word.length - 1]) - 1;
    words[index] = word.slice(0, -1);
  }
  return words.join(' ');
};

var s = 'is2 sentence4 This1 a3';
var expected = 'This is a sentence';
var result = sortSentence(s);
console.log(result, result === expected);

var s = 'Myself2 Me1 I4 and3';
var expected = 'Me Myself and I';
var result = sortSentence(s);
console.log(result, result === expected);
