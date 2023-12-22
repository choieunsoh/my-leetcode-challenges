// 159. Longest Substring with At Most Two Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  const n = s.length;
  const counter = new Array(128).fill(0);
  let count = 0;
  let result = 0;

  for (let left = 0, right = 0; right < n; right++) {
    const rightCode = s.charCodeAt(right);
    if (counter[rightCode] === 0) {
      count++;
    }
    counter[rightCode]++;

    while (count > 2) {
      const leftCode = s.charCodeAt(left++);
      if (--counter[leftCode] === 0) {
        count--;
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
