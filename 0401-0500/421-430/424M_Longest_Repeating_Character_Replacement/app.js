// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let freqMap = {};
  let maxFreq = 0;
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    freqMap[char] = (freqMap[char] ?? 0) + 1;
    maxFreq = Math.max(maxFreq, freqMap[char]);
    const valid = right - left + 1 - maxFreq <= k;
    if (!valid) {
      freqMap[s[left++]]--;
    }
    result = right - left + 1;
  }
  return result;
};

var s = 'ABAB',
  k = 2;
var expected = 4;
var result = characterReplacement(s, k);
console.log(result, result === expected);

var s = 'AABABBA',
  k = 1;
var expected = 4;
var result = characterReplacement(s, k);
console.log(result, result === expected);
