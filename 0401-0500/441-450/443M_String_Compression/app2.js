// 443. String Compression
// https://leetcode.com/problems/string-compression/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let compressedIndex = 0;
  let charIndex = 0;
  while (charIndex < chars.length) {
    const currentChar = chars[charIndex];
    let charCount = 0;
    while (charIndex < chars.length && chars[charIndex] === currentChar) {
      charIndex++;
      charCount++;
    }
    chars[compressedIndex++] = currentChar;
    if (charCount > 1) {
      for (const digit of String(charCount)) {
        chars[compressedIndex++] = digit;
      }
    }
  }
  return compressedIndex;
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
