// 2781. Length of the Longest Valid Substring
// https://leetcode.com/problems/length-of-the-longest-valid-substring/
/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
  const n = word.length;
  let result = 0;
  let max = 0;
  const banned = new Set(forbidden);
  for (let i = 0; i < n; i++) {
    const start = Math.max(i - 9, 0);
    for (let j = start; j <= i; j++) {
      const str = word.substring(j, i + 1);
      if (banned.has(str)) {
        max = Math.max(max, j + 1);
      }
    }
    result = Math.max(result, i - max + 1);
  }

  return result;
};

var word = 'cbaaaabc',
  forbidden = ['aaa', 'cb'];
var expected = 4;
var result = longestValidSubstring(word, forbidden);
console.log(result, result === expected);

var word = 'leetcode',
  forbidden = ['de', 'le', 'e'];
var expected = 4;
var result = longestValidSubstring(word, forbidden);
console.log(result, result === expected);
