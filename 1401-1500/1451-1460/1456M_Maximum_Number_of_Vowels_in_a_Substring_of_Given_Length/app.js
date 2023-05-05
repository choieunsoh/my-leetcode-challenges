// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = {};
  'aeiou'.split('').forEach((ch) => (vowels[ch] = 0));
  let left = 0;
  let count = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (vowels[ch] !== undefined) {
      vowels[ch]++;
      count++;
    }
    if (right - left + 1 === k) {
      result = Math.max(result, count);
      if (result >= k) return result;
      const chL = s[left++];
      if (vowels[chL] !== undefined) {
        vowels[chL]--;
        count--;
      }
    }
  }
  return result;
};

var s = 'abciiidef',
  k = 3;
var expected = 3;
var result = maxVowels(s, k);
console.log(result, result === expected);

var s = 'aeiou',
  k = 2;
var expected = 2;
var result = maxVowels(s, k);
console.log(result, result === expected);

var s = 'leetcode',
  k = 3;
var expected = 2;
var result = maxVowels(s, k);
console.log(result, result === expected);
