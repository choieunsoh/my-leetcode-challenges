// 395. Longest Substring with At Least K Repeating Characters
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let result = 0;
  const a = 'a'.charCodeAt(0);
  const uniqueCount = new Set(s.split('')).size;
  for (let currentUnique = 1; currentUnique <= uniqueCount; currentUnique++) {
    const charMap = Array(26).fill(0);
    let windowStart = 0;
    let windowEnd = 0;
    let unique = 0;
    let countAtLeastK = 0;
    while (windowEnd < s.length) {
      if (unique <= currentUnique) {
        const code = s.charCodeAt(windowEnd++) - a;
        if (charMap[code]++ === 0) unique++;
        if (charMap[code] === k) countAtLeastK++;
      } else {
        const code = s.charCodeAt(windowStart++) - a;
        if (charMap[code]-- === k) countAtLeastK--;
        if (charMap[code] === 0) unique--;
      }

      if (unique === currentUnique && unique === countAtLeastK) {
        result = Math.max(result, windowEnd - windowStart);
      }
    }
  }
  return result;
};

var s = 'aaabb',
  k = 3;
var expected = 3;
var result = longestSubstring(s, k);
console.log(result, result === expected);

var s = 'ababbc',
  k = 2;
var expected = 5;
var result = longestSubstring(s, k);
console.log(result, result === expected);

var s = 'abababbdabcabc',
  k = 2;
var expected = 7;
var result = longestSubstring(s, k);
console.log(result, result === expected);

var s = 'aaabbb',
  k = 3;
var expected = 6;
var result = longestSubstring(s, k);
console.log(result, result === expected);
