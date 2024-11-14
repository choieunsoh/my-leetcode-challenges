// 2135. Count Words Obtained After Adding a Letter
// https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/description/
// T.C.: O(m+n)
// S.C.: O(m)
/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  const startWordMaskSet = new Set(startWords.map(toMask));
  let result = 0;
  for (const word of targetWords) {
    const mask = toMask(word);
    for (let i = 0; i < 26; i++) {
      // bit of one 1's, two other ways 1 & (mask >> i), mask << ~i < 0
      if (mask & (1 << i)) {
        //  mask ^ (1 << i): toggle bit
        if (startWordMaskSet.has(mask ^ (1 << i))) {
          result++;
          break;
        }
      }
    }
  }
  return result;

  function toMask(word) {
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - 97);
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
