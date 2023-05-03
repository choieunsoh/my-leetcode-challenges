// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = [];
  let i = s.length - 1;
  while (i > -1) {
    let word = '';
    while (i > -1 && s[i] === ' ') i--;
    while (i > -1 && s[i] !== ' ') {
      word = s[i--] + word;
    }
    if (word) result.push(word);
  }
  return result.join(' ');
};

var s = 'the sky is blue';
var expected = 'blue is sky the';
var result = reverseWords(s);
console.log(result, result === expected);

var s = '  hello world  ';
var expected = 'world hello';
var result = reverseWords(s);
console.log(result, result === expected);

var s = 'a good   example';
var expected = 'example good a';
var result = reverseWords(s);
console.log(result, result === expected);
