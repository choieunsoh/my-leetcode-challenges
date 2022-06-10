// https://leetcode.com/problems/reverse-words-in-a-string/
// 151. Reverse Words in a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').filter(Boolean).reverse().join(' ');
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
