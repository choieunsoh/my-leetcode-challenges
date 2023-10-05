// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('');
  const vowels = new Set('aeiouAEIOU'.split(''));
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(s[left])) left++;
    while (left < right && !vowels.has(s[right])) right--;
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join('');
};

var s = 'hello';
var expected = 'holle';
var result = reverseVowels(s);
console.log(result, expected === result);

var s = 'leetcode';
var expected = 'leotcede';
var result = reverseVowels(s);
console.log(result, expected === result);
