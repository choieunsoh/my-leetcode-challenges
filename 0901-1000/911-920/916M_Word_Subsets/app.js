// 916. Word Subsets
// https://leetcode.com/problems/word-subsets/description/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const words2Count = new Array(26).fill(0);
  for (const word of words2) {
    const wordCount = getWordCount(word);
    for (let i = 0; i < 26; i++) {
      words2Count[i] = Math.max(words2Count[i], wordCount[i]);
    }
  }

  const result = [];
  for (const word of words1) {
    const wordCount = getWordCount(word);
    let isSubset = true;
    for (let i = 0; i < 26; i++) {
      if (wordCount[i] < words2Count[i]) {
        isSubset = false;
        break;
      }
    }
    if (isSubset) result.push(word);
  }
  return result;

  function getWordCount(word) {
    const a = 'a'.charCodeAt(0);
    const wordCount = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      wordCount[word.charCodeAt(i) - a]++;
    }
    return wordCount;
  }
};

var words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
  words2 = ['e', 'o'];
var expected = ['facebook', 'google', 'leetcode'];
var result = wordSubsets(words1, words2);
console.log(result, result.sort().join() === expected.sort().join());

var words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
  words2 = ['l', 'e'];
var expected = ['apple', 'google', 'leetcode'];
var result = wordSubsets(words1, words2);
console.log(result, result.sort().join() === expected.sort().join());

var words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
  words2 = ['oo', 'e', 'o'];
var expected = ['facebook', 'google'];
var result = wordSubsets(words1, words2);
console.log(result, result.sort().join() === expected.sort().join());
