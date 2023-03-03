// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function (s: string): number {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (count === 0 && s.charAt(i) === ' ') continue;
    if (s.charAt(i) === ' ') break;
    count++;
  }
  return count;
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
