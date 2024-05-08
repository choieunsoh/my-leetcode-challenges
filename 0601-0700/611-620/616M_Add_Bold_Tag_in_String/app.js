// 616. Add Bold Tag in String
// https://leetcode.com/problems/add-bold-tag-in-string/description/
// T.C.: O(n * (m ^ 2))
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function (s, words) {
  const n = s.length;
  const bold = new Array(n).fill(false);
  for (const word of words) {
    let startIndex = s.indexOf(word);
    while (startIndex !== -1) {
      for (let i = 0; i < word.length; i++) {
        bold[startIndex + i] = true;
      }
      startIndex = s.indexOf(word, startIndex + 1);
    }
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    if (bold[i] && !bold[i - 1]) {
      result += '<b>';
    }
    result += s[i];
    if (bold[i] && !bold[i + 1]) {
      result += '</b>';
    }
  }
  return result;
};

var s = 'abcxyz123',
  words = ['abc', '123'];
var expected = '<b>abc</b>xyz<b>123</b>';
var result = addBoldTag(s, words);
console.log(result, result === expected);

var s = 'aaabbb',
  words = ['aa', 'b'];
var expected = '<b>aaabbb</b>';
var result = addBoldTag(s, words);
console.log(result, result === expected);
