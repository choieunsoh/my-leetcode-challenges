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
  let encoded = '';
  for (const str of strs) {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      encoded += code.toString(36).padStart(2, '0');
    }
    encoded += ' ';
  }
  return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const decoded = [];
  const strs = s.split(' ');
  for (let j = 0; j < strs.length - 1; j++) {
    const str = strs[j];
    let decodedStr = '';
    for (let i = 0; i < str.length; i += 2) {
      const hex = `${str[i]}${str[i + 1]}`;
      const code = parseInt(hex, 36);
      decodedStr += String.fromCharCode(code);
    }
    decoded.push(decodedStr);
  }
  return decoded;
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
