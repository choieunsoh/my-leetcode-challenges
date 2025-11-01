// 1816. Truncate Sentence
// https://leetcode.com/problems/truncate-sentence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

var s = 'Hello how are you Contestant',
  k = 4;
var expected = 'Hello how are you';
var result = truncateSentence(s, k);
console.log(result, result === expected);

var s = 'What is the solution to this problem',
  k = 4;
var expected = 'What is the solution';
var result = truncateSentence(s, k);
console.log(result, result === expected);

var s = 'chopper is not a tanuki',
  k = 5;
var expected = 'chopper is not a tanuki';
var result = truncateSentence(s, k);
console.log(result, result === expected);
