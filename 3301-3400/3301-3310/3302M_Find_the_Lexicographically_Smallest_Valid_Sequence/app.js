// 3302. Find the Lexicographically Smallest Valid Sequence
// https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;
  const last = new Array(m).fill(-1);
  let j = m - 1;
  for (let i = n - 1; i >= 0; --i) {
    if (j >= 0 && word1[i] === word2[j]) {
      last[j] = i;
      j--;
    }
  }

  const result = [];
  let skip = 0;
  j = 0;
  for (let i = 0; i < n; ++i) {
    if (j === m) break;
    if (word1[i] === word2[j] || (skip === 0 && (j === m - 1 || i < last[j + 1]))) {
      skip += word1[i] !== word2[j] ? 1 : 0;
      result.push(i);
      j++;
    }
  }
  return j === m ? result : [];
};

var word1 = 'vbcca',
  word2 = 'abc';
var expected = [0, 1, 2];
var result = validSequence(word1, word2);
console.log(result, result.toString() === expected.toString());

var word1 = 'bacdc',
  word2 = 'abc';
var expected = [1, 2, 4];
var result = validSequence(word1, word2);
console.log(result, result.toString() === expected.toString());

var word1 = 'aaaaaa',
  word2 = 'aaabc';
var expected = [];
var result = validSequence(word1, word2);
console.log(result, result.toString() === expected.toString());

var word1 = 'abc',
  word2 = 'ab';
var expected = [0, 1];
var result = validSequence(word1, word2);
console.log(result, result.toString() === expected.toString());
