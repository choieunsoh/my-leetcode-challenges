// 1371. Find the Longest Substring Containing Vowels in Even Counts
// https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowels = new Map([
    ['a', 1],
    ['e', 2],
    ['i', 4],
    ['o', 8],
    ['u', 16],
  ]);
  const seen = new Map([[0, -1]]);
  let result = 0;
  let mask = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (vowels.has(c)) {
      mask ^= vowels.get(c);
    }
    if (seen.has(mask)) {
      result = Math.max(result, i - seen.get(mask));
    } else {
      seen.set(mask, i);
    }
  }
  return result;
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
