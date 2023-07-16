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
  for (let right = 0; right < n; right++) {
    const start = Math.max(right - 9, 0);
    for (let left = start; left <= right; left++) {
      const str = word.substring(left, right + 1);
      if (banned.has(str)) {
        max = Math.max(max, left + 1);
      }
    }
    result = Math.max(result, right - max + 1);
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
