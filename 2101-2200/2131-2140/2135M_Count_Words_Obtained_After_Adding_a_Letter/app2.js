// 2135. Count Words Obtained After Adding a Letter
// https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  const a = 'a'.charCodeAt(0);
  const startWordSet = new Set(startWords);
  const countToMasks = Array.from({ length: 27 }, () => []);
  for (const word of startWordSet) {
    const mask = toMask(word);
    countToMasks[word.length].push(mask);
  }

  let result = 0;
  const foundWordSet = new Set();
  forEachTargetWord: for (const word of targetWords) {
    const targetMask = toMask(word);

    if (foundWordSet.has(word)) {
      result++;
      continue;
    }

    for (const startMask of countToMasks[word.length - 1]) {
      const xor = targetMask ^ startMask;
      if ((xor & (xor - 1)) === 0) {
        result++;
        foundWordSet.add(word);
        continue forEachTargetWord;
      }
    }
  }
  return result;

  function toMask(word) {
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - a);
    }
    return mask;
  }
};

var startWords = ['ant', 'act', 'tack'],
  targetWords = ['tack', 'act', 'acti'];
var expected = 2;
var result = wordCount(startWords, targetWords);
console.log(result, expected === result);

var startWords = ['ab', 'a'],
  targetWords = ['abc', 'abcd'];
var expected = 1;
var result = wordCount(startWords, targetWords);
console.log(result, expected === result);

var startWords = ['g', 'vf', 'ylpuk', 'nyf', 'gdj', 'j', 'fyqzg', 'sizec'],
  targetWords = ['r', 'am', 'jg', 'umhjo', 'fov', 'lujy', 'b', 'uz', 'y'];
var expected = 2;
var result = wordCount(startWords, targetWords);
console.log(result, expected === result);
