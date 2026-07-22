// 758. Bold Words in String
// https://leetcode.com/problems/bold-words-in-string/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function (words, s) {
  const N = s.length;
  const mask = new Array(N).fill(false);
  for (let i = 0; i < N; i++) {
    for (let wi = 0; wi < words.length; wi++) {
      const word = words[wi];
      let match = true;
      for (let k = 0; k < word.length; k++) {
        if (k + i >= N || s[i + k] !== word[k]) {
          match = false;
          break;
        }
      }
      if (!match) continue;
      for (let j = i; j < i + word.length; j++) {
        mask[j] = true;
      }
    }
  }

  let result = '';
  for (let i = 0; i < N; i++) {
    if (mask[i] && (i === 0 || !mask[i - 1])) {
      result += '<b>';
    }
    result += s[i];
    if (mask[i] && (i === N - 1 || !mask[i + 1])) {
      result += '</b>';
    }
  }
  return result;
};

var words = ['ab', 'bc'],
  s = 'aabcd';
var expected = 'a<b>abc</b>d';
var result = boldWords(words, s);
console.log(result, result === expected);

var words2 = ['ab', 'cb'],
  s2 = 'aabcd';
var expected2 = 'a<b>ab</b>cd';
var result2 = boldWords(words2, s2);
console.log(result2, result2 === expected2);
