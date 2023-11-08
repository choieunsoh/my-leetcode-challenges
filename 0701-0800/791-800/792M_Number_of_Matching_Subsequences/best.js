// 792. Number of Matching Subsequences
// https://leetcode.com/problems/number-of-matching-subsequences/
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let result = 0;
  const map = new Map();
  words.forEach((word) => {
    map.set(word, map.get(word) + 1 || 1);
  });

  words = map.keys();
  for (const word of words) {
    let isSub = true;
    let lastIndex = -1;
    for (const ch of word) {
      let index = s.indexOf(ch, lastIndex + 1);
      if (lastIndex < index) {
        lastIndex = index;
      } else {
        isSub = false;
        break;
      }
    }
    if (isSub) {
      result += map.get(word);
    }
  }
  return result;
};

var s = 'abcde',
  words = ['a', 'bb', 'acd', 'ace'];
var expected = 3;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);

var s = 'dsahjpjauf',
  words = ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'];
var expected = 2;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);

var s = 'nwmswzegbu',
  words = ['mswz', 'swzegb', 'tpwhdywjst', 'dglnzwitub'];
var expected = 2;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);
