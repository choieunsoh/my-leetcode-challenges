// 2645. Minimum Additions to Make Valid String
// https://leetcode.com/problems/minimum-additions-to-make-valid-string/
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let result = 0;
  let prevChar = 'c'.charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    const currentChar = word.charCodeAt(i);
    result += calc(prevChar, currentChar);
    prevChar = currentChar;
  }
  result += calc(prevChar, 'a'.charCodeAt(0));
  return result;

  function calc(prev, curr) {
    if (curr <= prev) curr += 3;
    return curr - prev - 1;
  }
};

var word = 'aaaacc';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaaabb';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaaaac';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'b';
var expected = 2;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'bb';
var expected = 4;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'abba';
var expected = 5;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaa';
var expected = 6;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'abc';
var expected = 0;
var result = addMinimum(word);
console.log(result, result === expected);
