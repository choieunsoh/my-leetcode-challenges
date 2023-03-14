// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let result = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s.charAt(right);
    while (seen.has(char)) {
      seen.delete(s.charAt(left++));
    }
    seen.add(char);
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var s = 'abcabcbb';
var expected = 3;
var result = lengthOfLongestSubstring(s);
console.log(result, result === expected);

var s = 'bbbbb';
var expected = 1;
var result = lengthOfLongestSubstring(s);
console.log(result, result === expected);

var s = 'pwwkew';
var expected = 3;
var result = lengthOfLongestSubstring(s);
console.log(result, result === expected);
