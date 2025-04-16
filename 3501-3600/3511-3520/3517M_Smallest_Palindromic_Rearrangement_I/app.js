// 3517. Smallest Palindromic Rearrangement I
// https://leetcode.com/problems/smallest-palindromic-rearrangement-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (const ch of s) {
    counts[ch.charCodeAt(0) - a]++;
  }

  let prefix = '';
  let suffix = '';
  let middle = '';
  for (let i = 0; i < 26; i++) {
    if (counts[i] === 0) continue;

    const ch = String.fromCharCode(i + a);
    const count = counts[i];
    if (count % 2 === 1) {
      middle = ch;
    }

    const half = count >> 1;
    const str = ch.repeat(half);
    prefix += str;
    suffix = str + suffix;
  }

  return prefix + middle + suffix;
};

var s = 'z';
var expected = 'z';
var result = smallestPalindrome(s);
console.log(result, result === expected);

var s = 'babab';
var expected = 'abbba';
var result = smallestPalindrome(s);
console.log(result, result === expected);

var s = 'daccad';
var expected = 'acddca';
var result = smallestPalindrome(s);
console.log(result, result === expected);
