// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let length = 0;
  while (index > -1 && s.charAt(index) === ' ') index--;
  while (index > -1 && s.charAt(index) !== ' ') {
    length++;
    index--;
  }
  return length;
};

var s = 'Hello World';
var expected = 5;
var result = lengthOfLastWord(s);
console.log(result, result === expected);

var s = '   fly me   to   the moon  ';
var expected = 4;
var result = lengthOfLastWord(s);
console.log(result, result === expected);

var s = 'luffy is still joyboy';
var expected = 6;
var result = lengthOfLastWord(s);
console.log(result, result === expected);
