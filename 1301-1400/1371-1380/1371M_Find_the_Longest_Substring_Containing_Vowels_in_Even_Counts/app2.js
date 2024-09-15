// 1371. Find the Longest Substring Containing Vowels in Even Counts
// https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const a = 'a'.charCodeAt(0);
  const characterMask = [1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0];
  const seen = new Int32Array(32).fill(-1);
  seen[0] = 0;
  let longestSubstring = 0;
  let prefixXOR = 0;
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - a;
    prefixXOR ^= characterMask[charIndex];
    if (seen[prefixXOR] !== -1) {
      longestSubstring = Math.max(longestSubstring, i - seen[prefixXOR] + 1);
    } else {
      seen[prefixXOR] = i + 1;
    }
  }
  return longestSubstring;
};

var s = 'eleetminicoworoep';
var expected = 13;
var result = findTheLongestSubstring(s);
console.log(result, result === expected);

var s = 'leetcodeisgreat';
var expected = 5;
var result = findTheLongestSubstring(s);
console.log(result, result === expected);

var s = 'bcbcbc';
var expected = 6;
var result = findTheLongestSubstring(s);
console.log(result, result === expected);
