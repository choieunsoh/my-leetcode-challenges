// 1668. Maximum Repeating Substring
// https://leetcode.com/problems/maximum-repeating-substring/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const sLen = sequence.length;
  const wLen = word.length;
  let maxCount = 0;
  for (let i = 0; i < sLen; i++) {
    let sIndex = i;
    let wIndex = 0;
    let currCount = 0;
    while (sIndex < sLen) {
      if (sequence[sIndex] === word[wIndex]) {
        wIndex++;
        sIndex++;
        if (wIndex === wLen) {
          wIndex = 0;
          currCount++;
          maxCount = Math.max(maxCount, currCount);
        }
      } else {
        sIndex++;
        wIndex = 0;
        currCount = 0;
      }
    }
  }
  return maxCount;
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
