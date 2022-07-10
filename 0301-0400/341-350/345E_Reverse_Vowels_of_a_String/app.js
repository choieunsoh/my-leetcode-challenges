// https://leetcode.com/problems/reverse-vowels-of-a-string/
// 345. Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.includes(s[left])) left++;
    while (left < right && !vowels.includes(s[right])) right--;
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
