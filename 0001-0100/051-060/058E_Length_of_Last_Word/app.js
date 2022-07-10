// https://leetcode.com/problems/length-of-last-word/
// 58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().trim().length;
};

var s = 'Hello World';
var expected = 5;
console.log(lengthOfLastWord(s), expected);

var s = '   fly me   to   the moon  ';
var expected = 4;
console.log(lengthOfLastWord(s), expected);

var s = 'luffy is still joyboy';
var expected = 6;
console.log(lengthOfLastWord(s), expected);
