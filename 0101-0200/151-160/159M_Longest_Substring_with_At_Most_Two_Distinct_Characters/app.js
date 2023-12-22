// 159. Longest Substring with At Most Two Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  const seen = new Map();
  let result = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (!seen.has(s[right])) {
      seen.set(s[right], []);
    }
    seen.get(s[right]).push(right);

    while (seen.size > 2) {
      const leftChar = s[left++];
      seen.get(leftChar).shift();
      if (seen.get(leftChar).length === 0) {
        seen.delete(leftChar);
      }
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var s = 'eceba';
var expected = 3;
var result = lengthOfLongestSubstringTwoDistinct(s);
console.log(result, result === expected);

var s = 'ccaabbb';
var expected = 5;
var result = lengthOfLongestSubstringTwoDistinct(s);
console.log(result, result === expected);

var s = 'a';
var expected = 1;
var result = lengthOfLongestSubstringTwoDistinct(s);
console.log(result, result === expected);

var s = 'aa';
var expected = 2;
var result = lengthOfLongestSubstringTwoDistinct(s);
console.log(result, result === expected);
