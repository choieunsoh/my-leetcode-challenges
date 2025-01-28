// 394. Decode String
// https://leetcode.com/problems/decode-string/
// T.C.: O(maxK*n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const countStack = [];
  const stringStack = [];
  let decodedString = '';
  let k = 0;
  for (const ch of s) {
    if (isNumber(ch)) {
      k = k * 10 + Number(ch);
    } else if (ch === '[') {
      countStack.push(k);
      stringStack.push(decodedString);
      decodedString = '';
      k = 0;
    } else if (ch === ']') {
      const count = countStack.pop();
      const decodedStringBefore = stringStack.pop();
      const str = decodedString || k.toString();
      decodedString = decodedStringBefore + str.repeat(count);
    } else {
      decodedString += ch;
    }
  }

  return decodedString;

  function isNumber(ch) {
    return ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57;
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

var s = '2[4]';
var expected = '44';
var result = decodeString(s);
console.log(result, result === expected);
