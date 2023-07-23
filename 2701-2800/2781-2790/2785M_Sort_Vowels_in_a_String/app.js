// 2785. Sort Vowels in a String
// https://leetcode.com/problems/sort-vowels-in-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowels = 'AEIOUaeiou'.split('').map((ch) => [ch, 0]);
  const counter = new Map(vowels);
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (counter.has(ch)) {
      counter.set(ch, counter.get(ch) + 1);
    }
  }

  const chars = [...counter.values()];
  let index = 0;
  for (const ch of s) {
    if (counter.has(ch)) {
      while (chars[index] === 0) {
        index++;
      }
      chars[index]--;
      result += vowels[index][0];
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
