// 394. Decode String
// https://leetcode.com/problems/decode-string/
// T.C.: O(maxK*n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let index = 0;
  return decode();

  function decode() {
    let result = '';
    while (index < s.length && s.charAt(index) !== ']') {
      if (!isDigit(s.charAt(index))) {
        result += s.charAt(index++);
      } else {
        let k = 0;
        // build k while next character is a digit
        while (index < s.length && isDigit(s.charAt(index))) {
          k = k * 10 + Number(s.charAt(index++));
        }
        // ignore the opening bracket '['
        index++;
        const decodedString = decode();
        // ignore the closing bracket ']'
        index++;
        // build k[decodedString] and append to the result
        while (k-- > 0) {
          result += decodedString;
        }
      }
    }
    return result;
  }

  function isDigit(ch) {
    return ch >= '0' && ch <= '9';
  }
};

var s = '3[a]2[bc]';
var expected = 'aaabcbc';
var result = decodeString(s);
console.log(result, result === expected);

var s = '3[a2[c]]';
var expected = 'accaccacc';
var result = decodeString(s);
console.log(result, result === expected);

var s = '2[abc]3[cd]ef';
var expected = 'abcabccdcdcdef';
var result = decodeString(s);
console.log(result, result === expected);
