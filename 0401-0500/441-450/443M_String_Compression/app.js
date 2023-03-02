// 443. String Compression
// https://leetcode.com/problems/string-compression/
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  chars.push('');
  let prevChar = '';
  let prevCharCount = 0;
  let charIndex = 0;
  let index = 0;
  while (charIndex < chars.length) {
    const char = chars[charIndex++];
    if (char !== prevChar) {
      if (prevChar !== '' || char === '') {
        chars[index++] = prevChar;
        if (prevCharCount > 1) {
          const digits = prevCharCount + '';
          for (const digit of digits) {
            chars[index++] = digit;
          }
        }
      }
      prevChar = char;
      prevCharCount = 1;
    } else {
      prevCharCount++;
    }
  }

  chars.length = index;
  return chars.length;
};

var chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
var expected = 6;
var result = compress(chars);
console.log(result, result === expected);

var chars = ['a'];
var expected = 1;
var result = compress(chars);
console.log(result, result === expected);

var chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
var expected = 4;
var result = compress(chars);
console.log(result, result === expected);

var chars = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'a'];
var expected = 4;
var result = compress(chars);
console.log(result, result === expected);
