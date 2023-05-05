// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s.charAt(i))) count++;
  }
  let result = count;
  for (let i = k; i < s.length; i++) {
    if (isVowel(s.charAt(i - k))) count--;
    if (isVowel(s.charAt(i))) count++;
    result = Math.max(result, count);
    if (result >= k) return result;
  }
  return result;

  function isVowel(ch) {
    return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
  }
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

var s = 'ibpbhixfiouhdljnjfflpapptrxgcomvnb',
  k = 33;
var expected = 7;
var result = maxVowels(s, k);
console.log(result, result === expected);
