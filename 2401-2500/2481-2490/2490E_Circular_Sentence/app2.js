// 2490. Circular Sentence
// https://leetcode.com/problems/circular-sentence/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (sentence[i - 1] !== sentence[i + 1]) return false;
    }
  }
  return sentence[0] === sentence[sentence.length - 1];
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
