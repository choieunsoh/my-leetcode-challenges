// https://leetcode.com/problems/most-common-word/
// 819. Most Common Word
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let most = 0;
  let mostWord = '';
  const bannedWords = new Set(banned);
  const seen = new Map();
  const words = paragraph.toLowerCase().split(/\W+/);
  for (let i = 0; i < words.length; i++) {
    if (bannedWords.has(words[i])) continue;

    const count = (seen.get(words[i]) ?? 0) + 1;
    seen.set(words[i], count);
    if (count > most) {
      most = count;
      mostWord = words[i];
    }
  }
  return mostWord;
};

var paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.',
  banned = ['hit'];
var expected = 'ball';
var result = mostCommonWord(paragraph, banned);
console.log(result, result === expected);

var paragraph = 'a.',
  banned = [];
var expected = 'a';
var result = mostCommonWord(paragraph, banned);
console.log(result, result === expected);
