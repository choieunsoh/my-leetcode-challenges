// 2490. Circular Sentence
// https://leetcode.com/problems/circular-sentence/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const words = sentence.split(' ');
  words.push(words[0]);
  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];
    if (currentWord.at(-1) !== nextWord[0]) return false;
  }
  return true;
};

var sentence = 'leetcode exercises sound delightful';
var expected = true;
var result = isCircularSentence(sentence);
console.log(result, result === expected);

var sentence = 'eetcode';
var expected = true;
var result = isCircularSentence(sentence);
console.log(result, result === expected);

var sentence = 'Leetcode is cool';
var expected = false;
var result = isCircularSentence(sentence);
console.log(result, result === expected);
