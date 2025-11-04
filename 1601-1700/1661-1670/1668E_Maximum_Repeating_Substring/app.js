// 1668. Maximum Repeating Substring
// https://leetcode.com/problems/maximum-repeating-substring/description/
// T.C.: O(m*n)
// S.C.: O(m)
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let repeatWord = word;
  let count = 0;
  while (sequence.includes(repeatWord)) {
    count++;
    repeatWord += word;
  }
  return count;
};

var sequence = 'ababc',
  word = 'ab';
var expected = 2;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'ababc',
  word = 'ba';
var expected = 1;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'ababc',
  word = 'ac';
var expected = 0;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);

var sequence = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba',
  word = 'aaaba';
var expected = 5;
var result = maxRepeating(sequence, word);
console.log(result, result === expected);
