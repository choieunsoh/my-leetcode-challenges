/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function (s, t) {
  //
};

var s = 'a',
  t = 'a';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abc',
  t = 'def';
var expected = 1;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'b',
  t = 'aaaa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abcde',
  t = 'ecdba';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aa',
  t = 'aa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aa';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aaaaaaa';
var expected = 10;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'i',
  t = 'ih';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'ab',
  t = 'ba';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);
