// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function (s: string): number {
  return s.trim().split(' ').pop()?.length ?? 0;
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
