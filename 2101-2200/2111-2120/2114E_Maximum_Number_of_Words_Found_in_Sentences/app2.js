// 2114. Maximum Number of Words Found in Sentences
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxWords = 0;
  for (const sentence of sentences) {
    let spaceCount = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        spaceCount++;
      }
    }
    const wordCount = spaceCount + 1;
    if (wordCount > maxWords) {
      maxWords = wordCount;
    }
  }
  return maxWords;
};

var sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'];
var expected = 6;
var result = mostWordsFound(sentences);
console.log(result, result === expected);

var sentences = ['please wait', 'continue to fight', 'continue to win'];
var expected = 3;
var result = mostWordsFound(sentences);
console.log(result, result === expected);
