// 1119. Remove Vowels from a String
// https://leetcode.com/problems/remove-vowels-from-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!vowels.has(s[i])) {
      result += s[i];
    }
  }
  return result;
};

var s = 'leetcodeisacommunityforcoders';
var expected = 'ltcdscmmntyfrcdrs';
var result = removeVowels(s);
console.log(result, result === expected);

var s = 'aeiou';
var expected = '';
var result = removeVowels(s);
console.log(result, result === expected);
