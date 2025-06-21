// 3085. Minimum Deletions to Make String K-Special
// https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const a = 'a'.charCodeAt(0);
  const freq = new Array(26).fill(0);
  for (const ch of word) {
    freq[ch.charCodeAt(0) - a]++;
  }

  let result = word.length;
  for (const a of freq) {
    if (a === 0) continue;
    let deleted = 0;
    for (const b of freq) {
      if (b === 0) continue;
      if (a > b) {
        deleted += b;
      } else if (b > a + k) {
        deleted += b - (a + k);
      }
    }
    result = Math.min(result, deleted);
  }

  return result;
};

var word = 'aabcaba',
  k = 0;
var expected = 3;
var result = minimumDeletions(word, k);
console.log(result, result === expected);

var word = 'dabdcbdcdcd',
  k = 2;
var expected = 2;
var result = minimumDeletions(word, k);
console.log(result, result === expected);

var word = 'aaabaaa',
  k = 2;
var expected = 1;
var result = minimumDeletions(word, k);
console.log(result, result === expected);
