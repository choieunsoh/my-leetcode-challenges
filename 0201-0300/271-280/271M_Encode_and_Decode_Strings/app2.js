// 271. Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  const delimiter = '🍕';
  return strs.join(delimiter);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const delimiter = '🍕';
  return s.split(delimiter);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

var dummy_input = ['Hello', 'World'];
var expected = ['Hello', 'World'];
var result = decode(encode(dummy_input));
console.log(result, result.join() === expected.join());

var dummy_input = [''];
var expected = [''];
var result = decode(encode(dummy_input));
console.log(result, result.join() === expected.join());

var dummy_input = ['a', '4 '];
var expected = ['a', '4 '];
var result = decode(encode(dummy_input));
console.log(result, result.join() === expected.join());

var dummy_input = ['', ''];
var expected = ['', ''];
var result = decode(encode(dummy_input));
console.log(result, result.join() === expected.join());
