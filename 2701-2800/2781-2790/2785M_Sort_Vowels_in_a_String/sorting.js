// 2785. Sort Vowels in a String
// https://leetcode.com/problems/sort-vowels-in-a-string/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowels = new Set('AEIOUaeiou'.split(''));
  const tempVowels = [];
  for (const ch of s) {
    if (vowels.has(ch)) {
      tempVowels.push(ch);
    }
  }
  tempVowels.sort();

  let result = '';
  let index = 0;
  for (const ch of s) {
    if (vowels.has(ch)) {
      result += tempVowels[index++];
    } else {
      result += ch;
    }
  }
  return result;
};

var s = 'lEetcOde';
var expected = 'lEOtcede';
var result = sortVowels(s);
console.log(result, result === expected);

var s = 'lYmpH';
var expected = 'lYmpH';
var result = sortVowels(s);
console.log(result, result === expected);
