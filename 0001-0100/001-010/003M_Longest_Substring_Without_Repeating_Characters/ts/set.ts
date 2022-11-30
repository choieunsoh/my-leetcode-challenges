// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring_TS = function (s: string): number {
  let result = 0;
  const seen = new Set();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    while (seen.has(char)) {
      seen.delete(s[left++]);
    }
    seen.add(char);
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var s = 'abcabcbb';
var expected = 3;
var result = lengthOfLongestSubstring_TS(s);
console.log(result, result === expected);

var s = 'bbbbb';
var expected = 1;
var result = lengthOfLongestSubstring_TS(s);
console.log(result, result === expected);

var s = 'pwwkew';
var expected = 3;
var result = lengthOfLongestSubstring_TS(s);
console.log(result, result === expected);

var s = 'bbtablud';
var expected = 6;
var result = lengthOfLongestSubstring_TS(s);
console.log(result, result === expected);
