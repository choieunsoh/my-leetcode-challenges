// 340. Longest Substring with At Most K Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// T.C.: O(n)
// S.C.: O(k)
var lengthOfLongestSubstringKDistinct = function (s: string, k: number): number {
  let result = 0;
  const freq = new Map<string, number>();
  for (let left = 0, right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) ?? 0) + 1);
    while (freq.size > k) {
      freq.set(s[left], freq.get(s[left])! - 1);
      if (freq.get(s[left]) === 0) {
        freq.delete(s[left]);
      }
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var s = 'eceba',
  k = 2;
var expected = 3;
var result = lengthOfLongestSubstringKDistinct(s, k);
console.log(result, result === expected);

var s = 'aa',
  k = 1;
var expected = 2;
var result = lengthOfLongestSubstringKDistinct(s, k);
console.log(result, result === expected);

var s = 'abaccc',
  k = 2;
var expected = 4;
var result = lengthOfLongestSubstringKDistinct(s, k);
console.log(result, result === expected);
