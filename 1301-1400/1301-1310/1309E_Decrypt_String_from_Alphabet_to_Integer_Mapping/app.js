// 1309. Decrypt String from Alphabet to Integer Mapping
// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const a = 'a'.charCodeAt(0) - 1;
  let result = '';
  let i = s.length - 1;
  while (i >= 0) {
    let num = 0;
    if (s[i] === '#') {
      num = Number(s.slice(i - 2, i));
      i -= 3;
    } else {
      num = Number(s[i]);
      i--;
    }
    const ch = String.fromCharCode(num + a);
    result = ch + result;
  }
  return result;
};

var s = '10#11#12';
var expected = 'jkab';
var result = freqAlphabets(s);
console.log(result, result === expected);

var s = '1326#';
var expected = 'acz';
var result = freqAlphabets(s);
console.log(result, result === expected);
